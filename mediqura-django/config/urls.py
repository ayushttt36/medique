from django.contrib import admin
from django.urls import path, include
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status


class HealthCheckView(APIView):
    def get(self, request):
        return Response({
            'status': 'OK',
            'message': 'Mediqura Django Backend is running'
        }, status=status.HTTP_200_OK)


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/health/', HealthCheckView.as_view()),
    path('', include('mediqura.urls')),
    path('api-auth/', include('rest_framework.urls')),
]
