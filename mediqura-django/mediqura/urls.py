from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register(r'demos', views.DemoRequestViewSet, basename='demo')
router.register(r'patients', views.PatientViewSet, basename='patient')
router.register(r'patient-vitals', views.PatientVitalsViewSet, basename='vitals')
router.register(r'appointments', views.AppointmentViewSet, basename='appointment')
router.register(r'prescriptions', views.PrescriptionViewSet, basename='prescription')

urlpatterns = [
    path('api/', include(router.urls)),
]
