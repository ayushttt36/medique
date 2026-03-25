# Mediqura Backend API

Server-side application for Mediqura Hospital Information Management System with SQLite database.

## Features

- ✅ Demo Request Management
- ✅ Patient Management
- ✅ Vitals Recording
- ✅ Appointment Management
- ✅ Prescription Management
- ✅ Analytics & Reporting
- ✅ CORS Support
- ✅ Error Handling

## Installation

### Prerequisites
- Node.js 16+
- npm

### Setup

```bash
cd medqura-backend
npm install
```

## Configuration

Create a `.env` file:

```env
PORT=5001
NODE_ENV=development
DATABASE=mediqura.db
FRONTEND_URL=http://localhost:5173
```

## Running the Server

### Development Mode
```bash
npm run dev
```

### Production Mode
```bash
npm start
```

Server will be available at `http://localhost:5001`

## API Endpoints

### Demo Requests
- `POST /api/demos` - Create demo request
- `GET /api/demos` - Get all demo requests
- `GET /api/demos/:id` - Get single demo request
- `PATCH /api/demos/:id` - Update demo status
- `DELETE /api/demos/:id` - Delete demo request

### Patients
- `POST /api/patients` - Create patient
- `GET /api/patients` - Get all patients
- `GET /api/patients/:id` - Get patient details
- `PATCH /api/patients/:id` - Update patient
- `POST /api/patients/:id/vitals` - Record vitals

### Appointments
- `POST /api/appointments` - Create appointment
- `GET /api/appointments` - Get all appointments
- `GET /api/appointments/:id` - Get appointment
- `PATCH /api/appointments/:id` - Update appointment
- `DELETE /api/appointments/:id` - Delete appointment

### Prescriptions
- `POST /api/prescriptions` - Create prescription
- `GET /api/prescriptions` - Get all prescriptions
- `GET /api/prescriptions/:id` - Get prescription
- `PATCH /api/prescriptions/:id` - Update prescription
- `DELETE /api/prescriptions/:id` - Delete prescription

### Patient Vitals
- `POST /api/patient_vitals` - Create vitals record
- `GET /api/patient_vitals` - Get all vitals
- `GET /api/patient_vitals/:id` - Get vitals record
- `DELETE /api/patient_vitals/:id` - Delete vitals record

### Analytics
- `GET /api/analytics/stats` - Dashboard statistics
- `GET /api/analytics/patients-by-department` - Department breakdown
- `GET /api/analytics/demo-status` - Demo request status
- `GET /api/analytics/recent-demos` - Recent demo requests
- `GET /api/analytics/appointment-status` - Appointment status

### Health Check
- `GET /api/health` - Server status

## Database Schema

### demo_requests
- id (TEXT, PRIMARY KEY)
- name (TEXT)
- email (TEXT)
- phone (TEXT)
- hospital_name (TEXT)
- message (TEXT)
- status (TEXT) - pending, scheduled, completed, cancelled
- created_at (DATETIME)
- updated_at (DATETIME)

### patients
- id (TEXT, PRIMARY KEY)
- uhid (TEXT, UNIQUE)
- name (TEXT)
- email (TEXT)
- phone (TEXT)
- age (INTEGER)
- gender (TEXT)
- address (TEXT)
- admission_date (DATETIME)
- department (TEXT)
- status (TEXT) - active, inactive, discharged
- created_at (DATETIME)
- updated_at (DATETIME)

### patient_vitals
- id (TEXT, PRIMARY KEY)
- patient_id (TEXT)
- temperature (REAL)
- blood_pressure (TEXT)
- heart_rate (INTEGER)
- respiratory_rate (INTEGER)
- oxygen_saturation (REAL)
- recorded_at (DATETIME)

### appointments
- id (TEXT, PRIMARY KEY)
- patient_id (TEXT)
- doctor_name (TEXT)
- department (TEXT)
- appointment_date (DATETIME)
- status (TEXT)
- notes (TEXT)
- created_at (DATETIME)

### prescriptions
- id (TEXT, PRIMARY KEY)
- patient_id (TEXT)
- doctor_name (TEXT)
- medication (TEXT)
- dosage (TEXT)
- frequency (TEXT)
- duration (TEXT)
- notes (TEXT)
- created_at (DATETIME)

## Example API Usage

### Create Demo Request
```bash
curl -X POST http://localhost:5001/api/demos \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Dr. John Doe",
    "email": "john@hospital.com",
    "phone": "+91 9876543210",
    "hospital_name": "City Hospital",
    "message": "Interested in Mediqura HIMS"
  }'
```

### Get All Patients
```bash
curl http://localhost:5001/api/patients
```

### Get Dashboard Stats
```bash
curl http://localhost:5000/api/analytics/stats
```

## Technologies Used

- **Express.js** - Web framework
- **SQLite3** - Database
- **CORS** - Cross-origin support
- **Body Parser** - Request parsing
- **UUID** - Unique ID generation
- **Nodemon** - Development tool

## Error Handling

All errors return JSON responses with appropriate HTTP status codes:

- 400 - Bad Request
- 404 - Not Found
- 500 - Internal Server Error

## License

© 2026 Mobimp Services Private Limited

## Support

For issues or feature requests, contact: support@mobimp.com
