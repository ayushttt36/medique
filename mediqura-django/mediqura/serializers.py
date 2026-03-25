from rest_framework import serializers
from .models import DemoRequest, Patient, PatientVitals, Appointment, Prescription


class DemoRequestSerializer(serializers.ModelSerializer):
    class Meta:
        model = DemoRequest
        fields = '__all__'
        read_only_fields = ('id', 'created_at', 'updated_at')


class PatientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Patient
        fields = '__all__'
        read_only_fields = ('id', 'created_at', 'updated_at')


class PatientVitalsSerializer(serializers.ModelSerializer):
    patient_name = serializers.CharField(source='patient.name', read_only=True)

    class Meta:
        model = PatientVitals
        fields = '__all__'
        read_only_fields = ('id', 'recorded_at')


class AppointmentSerializer(serializers.ModelSerializer):
    patient_name = serializers.CharField(source='patient.name', read_only=True)

    class Meta:
        model = Appointment
        fields = '__all__'
        read_only_fields = ('id', 'created_at', 'updated_at')


class PrescriptionSerializer(serializers.ModelSerializer):
    patient_name = serializers.CharField(source='patient.name', read_only=True)

    class Meta:
        model = Prescription
        fields = '__all__'
        read_only_fields = ('id', 'created_at', 'updated_at')


class PatientDetailSerializer(serializers.ModelSerializer):
    """Detailed patient view with related data"""
    vitals = PatientVitalsSerializer(many=True, read_only=True)
    appointments = AppointmentSerializer(many=True, read_only=True)
    prescriptions = PrescriptionSerializer(many=True, read_only=True)

    class Meta:
        model = Patient
        fields = '__all__'
        read_only_fields = ('id', 'created_at', 'updated_at')
