from django.contrib import admin
from .models import DemoRequest, Patient, PatientVitals, Appointment, Prescription


@admin.register(DemoRequest)
class DemoRequestAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'status', 'created_at')
    list_filter = ('status', 'created_at')
    search_fields = ('name', 'email', 'hospital_name')
    ordering = ('-created_at',)


@admin.register(Patient)
class PatientAdmin(admin.ModelAdmin):
    list_display = ('name', 'uhid', 'email', 'department', 'status', 'created_at')
    list_filter = ('status', 'department', 'gender')
    search_fields = ('name', 'uhid', 'email', 'phone')
    ordering = ('-created_at',)


@admin.register(PatientVitals)
class PatientVitalsAdmin(admin.ModelAdmin):
    list_display = ('patient', 'temperature', 'heart_rate', 'blood_pressure', 'recorded_at')
    list_filter = ('recorded_at',)
    search_fields = ('patient__name', 'patient__uhid')
    ordering = ('-recorded_at',)


@admin.register(Appointment)
class AppointmentAdmin(admin.ModelAdmin):
    list_display = ('patient', 'doctor_name', 'appointment_date', 'status')
    list_filter = ('status', 'department', 'appointment_date')
    search_fields = ('patient__name', 'doctor_name', 'department')
    ordering = ('-appointment_date',)


@admin.register(Prescription)
class PrescriptionAdmin(admin.ModelAdmin):
    list_display = ('patient', 'medication', 'dosage', 'doctor_name', 'created_at')
    list_filter = ('created_at',)
    search_fields = ('patient__name', 'medication', 'doctor_name')
    ordering = ('-created_at',)
