# Mediqura Django Backend

Complete Hospital Information Management System (HIMS) backend built with Django + Django REST Framework.

## Setup & Installation

### 1. Create Virtual Environment

```bash
cd mediqura-django
python -m venv venv
# Windows
venv\Scripts\activate
# macOS/Linux
source venv/bin/activate
```

### 2. Install Dependencies

```bash
pip install -r requirements.txt
```

### 3. Create .env File

```bash
cp .env.example .env
# Edit .env with your settings (optional, defaults are provided)
```

### 4. Run Migrations

```bash
python manage.py makemigrations
python manage.py migrate
```

### 5. Create Superuser (Admin)

```bash
python manage.py createsuperuser
```

### 6. Run Development Server

```bash
python manage.py runserver
```

Access the application:
- **API**: http://localhost:8000/api/
- **Admin Panel**: http://localhost:8000/admin/
- **Health Check**: http://localhost:8000/api/health/

## API Endpoints

### Demo Requests
- `GET /api/demos/` - List all demo requests
- `POST /api/demos/` - Create new demo request
- `GET /api/demos/{id}/` - Get demo request details
- `PATCH /api/demos/{id}/` - Update demo request
- `DELETE /api/demos/{id}/` - Delete demo request
- `GET /api/demos/by_status/?status=pending` - Filter by status

### Patients
- `GET /api/patients/` - List all patients
- `POST /api/patients/` - Create new patient
- `GET /api/patients/{id}/` - Get patient with all related data
- `PATCH /api/patients/{id}/` - Update patient
- `DELETE /api/patients/{id}/` - Delete patient
- `POST /api/patients/{id}/add_vitals/` - Add vitals for patient
- `POST /api/patients/{id}/add_appointment/` - Add appointment
- `POST /api/patients/{id}/add_prescription/` - Add prescription

Query filters:
- `?department=Cardiology` - Filter by department
- `?status=active` - Filter by patient status
- `?search=John` - Search by name, UHID, or email

### Patient Vitals
- `GET /api/patient-vitals/` - List all vitals
- `POST /api/patient-vitals/` - Record vitals
- `GET /api/patient-vitals/{id}/` - Get vitals record
- `PATCH /api/patient-vitals/{id}/` - Update vitals
- `DELETE /api/patient-vitals/{id}/` - Delete vitals
- `?patient_id={patient_id}` - Filter by patient

### Appointments
- `GET /api/appointments/` - List appointments
- `POST /api/appointments/` - Create appointment
- `GET /api/appointments/{id}/` - Get appointment details
- `PATCH /api/appointments/{id}/` - Update appointment
- `DELETE /api/appointments/{id}/` - Delete appointment
- `GET /api/appointments/upcoming/` - Get upcoming appointments
- `?status=scheduled` - Filter by status
- `?patient_id={patient_id}` - Filter by patient

### Prescriptions
- `GET /api/prescriptions/` - List prescriptions
- `POST /api/prescriptions/` - Create prescription
- `GET /api/prescriptions/{id}/` - Get prescription details
- `PATCH /api/prescriptions/{id}/` - Update prescription
- `DELETE /api/prescriptions/{id}/` - Delete prescription
- `?patient_id={patient_id}` - Filter by patient

## Project Structure

```
mediqura-django/
├── config/                 # Django project settings
│   ├── settings.py        # Main settings
│   ├── urls.py            # URL routing
│   ├── wsgi.py            # WSGI application
│   └── __init__.py
├── mediqura/              # Main app
│   ├── models.py          # Database models
│   ├── serializers.py     # DRF serializers
│   ├── views.py           # ViewSets
│   ├── urls.py            # App URLs
│   ├── admin.py           # Django admin config
│   ├── apps.py            # App config
│   └── __init__.py
├── templates/             # HTML templates (for future frontend)
├── manage.py              # Django management script
├── requirements.txt       # Python dependencies
├── .env                   # Environment variables
└── README.md              # This file
```

## Database Models

### DemoRequest
- `id` (UUID, Primary Key)
- `name` (String)
- `email` (Email)
- `phone` (String)
- `hospital_name` (String)
- `message` (Text)
- `status` (pending, scheduled, completed, cancelled)
- `created_at`, `updated_at` (Timestamps)

### Patient
- `id` (UUID, Primary Key)
- `uhid` (String, Unique hospital ID)
- `name` (String)
- `email` (Email)
- `phone` (String)
- `age` (Integer)
- `gender` (M/F/O)
- `address` (Text)
- `admission_date` (DateTime)
- `department` (String)
- `status` (active, inactive, discharged)
- `created_at`, `updated_at` (Timestamps)

### PatientVitals
- `id` (UUID, Primary Key)
- `patient` (ForeignKey to Patient)
- `temperature` (Float)
- `blood_pressure` (String)
- `heart_rate` (Integer)
- `respiratory_rate` (Integer)
- `oxygen_saturation` (Float)
- `recorded_at` (DateTime)

### Appointment
- `id` (UUID, Primary Key)
- `patient` (ForeignKey to Patient)
- `doctor_name` (String)
- `department` (String)
- `appointment_date` (DateTime)
- `status` (scheduled, completed, cancelled, no-show)
- `notes` (Text)
- `created_at`, `updated_at` (Timestamps)

### Prescription
- `id` (UUID, Primary Key)
- `patient` (ForeignKey to Patient)
- `doctor_name` (String)
- `medication` (String)
- `dosage` (String)
- `frequency` (String)
- `duration` (String)
- `notes` (Text)
- `created_at`, `updated_at` (Timestamps)

## Production Deployment

### Using Gunicorn

```bash
pip install gunicorn
gunicorn config.wsgi:application --bind 0.0.0.0:8000
```

### Environment Variables for Production

```
SECRET_KEY=your-secure-secret-key
DEBUG=False
ALLOWED_HOSTS=yourdomain.com,www.yourdomain.com
DATABASE=db.sqlite3
FRONTEND_URL=https://yourdomain.com
```

### Using Docker

```dockerfile
FROM python:3.11-slim

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

CMD ["gunicorn", "config.wsgi:application", "--bind", "0.0.0.0:8000"]
```

## Testing

```bash
python manage.py test
```

## Database Backup

```bash
python manage.py dumpdata > backup.json
```

## Database Restore

```bash
python manage.py loaddata backup.json
```

## Troubleshooting

### Port Already in Use
```bash
python manage.py runserver 8001
```

### Database Errors
```bash
python manage.py flush  # Clear database
python manage.py migrate
```

### Migration Issues
```bash
python manage.py makemigrations mediqura
python manage.py migrate mediqura
```

## Architecture

```
┌─────────────────────────────────────────────┐
│       Frontend (React/HTML Templates)       │
│             (Port 3000/8000)                │
└──────────────┬──────────────────────────────┘
               │ HTTP/CORS
               │
       ┌───────▼──────────┐
       │  Django Backend  │
       │   (Port 8000)    │
       │ Django REST API  │
       └────────┬─────────┘
                │
       ┌────────▼──────────┐
       │   SQLite DB       │
       │ (db.sqlite3)      │
       └───────────────────┘
```

## Support & Documentation

- Django Docs: https://docs.djangoproject.com/
- DRF Docs: https://www.django-rest-framework.org/
- API Testing: Use Postman, Insomnia, or cURL

## License

ISC
