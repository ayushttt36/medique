from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from django.db.models import Q
from .models import DemoRequest, Patient, PatientVitals, Appointment, Prescription
from .serializers import (
    DemoRequestSerializer, 
    PatientSerializer, 
    PatientVitalsSerializer,
    AppointmentSerializer, 
    PrescriptionSerializer,
    PatientDetailSerializer
)


class DemoRequestViewSet(viewsets.ModelViewSet):
    queryset = DemoRequest.objects.all()
    serializer_class = DemoRequestSerializer

    @action(detail=False, methods=['get'])
    def by_status(self, request):
        status_filter = request.query_params.get('status')
        if status_filter:
            queryset = self.queryset.filter(status=status_filter)
            serializer = self.get_serializer(queryset, many=True)
            return Response({
                'total': queryset.count(),
                'data': serializer.data
            })
        return Response({'error': 'status parameter required'}, status=status.HTTP_400_BAD_REQUEST)


class PatientViewSet(viewsets.ModelViewSet):
    queryset = Patient.objects.all()
    serializer_class = PatientSerializer

    def get_serializer_class(self):
        if self.action == 'retrieve':
            return PatientDetailSerializer
        return PatientSerializer

    def get_queryset(self):
        queryset = super().get_queryset()
        department = self.request.query_params.get('department')
        patient_status = self.request.query_params.get('status')
        search = self.request.query_params.get('search')

        if department:
            queryset = queryset.filter(department=department)
        if patient_status:
            queryset = queryset.filter(status=patient_status)
        if search:
            queryset = queryset.filter(
                Q(name__icontains=search) | Q(uhid__icontains=search) | Q(email__icontains=search)
            )

        return queryset

    @action(detail=True, methods=['post'])
    def add_vitals(self, request, pk=None):
        patient = self.get_object()
        serializer = PatientVitalsSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(patient=patient)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    @action(detail=True, methods=['post'])
    def add_appointment(self, request, pk=None):
        patient = self.get_object()
        serializer = AppointmentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(patient=patient)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    @action(detail=True, methods=['post'])
    def add_prescription(self, request, pk=None):
        patient = self.get_object()
        serializer = PrescriptionSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(patient=patient)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class PatientVitalsViewSet(viewsets.ModelViewSet):
    queryset = PatientVitals.objects.all()
    serializer_class = PatientVitalsSerializer

    def get_queryset(self):
        queryset = super().get_queryset()
        patient_id = self.request.query_params.get('patient_id')
        if patient_id:
            queryset = queryset.filter(patient_id=patient_id)
        return queryset


class AppointmentViewSet(viewsets.ModelViewSet):
    queryset = Appointment.objects.all()
    serializer_class = AppointmentSerializer

    def get_queryset(self):
        queryset = super().get_queryset()
        patient_id = self.request.query_params.get('patient_id')
        status_filter = self.request.query_params.get('status')

        if patient_id:
            queryset = queryset.filter(patient_id=patient_id)
        if status_filter:
            queryset = queryset.filter(status=status_filter)

        return queryset

    @action(detail=False, methods=['get'])
    def upcoming(self, request):
        from django.utils import timezone
        upcoming = self.queryset.filter(
            appointment_date__gte=timezone.now(),
            status='scheduled'
        ).order_by('appointment_date')
        serializer = self.get_serializer(upcoming, many=True)
        return Response({
            'total': upcoming.count(),
            'data': serializer.data
        })


class PrescriptionViewSet(viewsets.ModelViewSet):
    queryset = Prescription.objects.all()
    serializer_class = PrescriptionSerializer

    def get_queryset(self):
        queryset = super().get_queryset()
        patient_id = self.request.query_params.get('patient_id')
        if patient_id:
            queryset = queryset.filter(patient_id=patient_id)
        return queryset
