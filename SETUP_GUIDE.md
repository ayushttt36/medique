# Mediqura Full Stack Setup Guide

## 🚀 Project Overview

Complete Hospital Information Management System (HIMS) with:
- **Frontend**: React + Vite + Tailwind CSS (Marketing Website + Admin Panel)
- **Backend**: Node.js + Express + SQLite
- **Database**: SQLite with normalized schema

## 📋 System Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    Frontend (Port 5173)                       │
│        React + Vite + Tailwind CSS Marketing Website         │
│  - Header, Hero, Modules, Features, Ecosystem, Benefits, CTA  │
│  - Contact Form (Connected to Backend)                       │
│  - Responsive Design (Mobile, Tablet, Desktop)               │
└─────────────────┬───────────────────────────────────────────┘
                  │
                  │ HTTP/CORS
                  │
        ┌─────────▼──────────┐
        │  Backend (Port     │
        │     5001)          │
        │   Express.js       │
        └─────────┬──────────┘
                  │
        ┌─────────▼──────────────┐
        │   SQLite Database      │
        │  - Demos               │
        │  - Patients            │
        │  - Vitals              │
        │  - Appointments        │
        │  - Prescriptions       │
        └────────────────────────┘
```

## 📂 Project Structure

```
med/
├── medqura-frontend/                 [Port 5173]
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── Modules.jsx
│   │   │   ├── Features.jsx
│   │   │   ├── Ecosystem.jsx
│   │   │   ├── Benefits.jsx
│   │   │   ├── CTA.jsx         ← Connected to Backend
│   │   │   └── Footer.jsx
│   │   ├── services/
│   │   │   └── api.js          ← API Client
│   │   └── App.jsx
│   ├── package.json
│   └── vite.config.js
│
└── medqura-backend/                  [Port 5001]
    ├── server.js               ← Main Server
    ├── database/
    │   └── db.js               ← SQLite Setup
    ├── routes/
    │   ├── demoRoutes.js       ← Demo API
    │   ├── patientRoutes.js    ← Patient API
    │   └── analyticsRoutes.js  ← Analytics API
    ├── mediqura.db             ← SQLite Database
    ├── package.json
    └── .env
```

## ⚙️ Installation & Setup

### 1. Frontend Setup

```bash
cd c:\Users\ayush\OneDrive\Desktop\med\medqura-frontend
npm install
npm run dev
```

**Access**: http://localhost:5173

### 2. Backend Setup

```bash
cd c:\Users\ayush\OneDrive\Desktop\med\medqura-backend
npm install
node server.js
```

**Access**: http://localhost:5001
**API Health Check**: http://localhost:5001/api/health

## 🗄️ Database Schema

### demo_requests
```sql
CREATE TABLE demo_requests (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  hospital_name TEXT,
  message TEXT,
  status TEXT DEFAULT 'pending',
  created_at DATETIME,
  updated_at DATETIME
);
```

### patients
```sql
CREATE TABLE patients (
  id TEXT PRIMARY KEY,
  uhid TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  email TEXT,
  phone TEXT,
  age INTEGER,
  gender TEXT,
  address TEXT,
  admission_date DATETIME,
  department TEXT,
  status TEXT DEFAULT 'active',
  created_at DATETIME,
  updated_at DATETIME
);
```

### patient_vitals
```sql
CREATE TABLE patient_vitals (
  id TEXT PRIMARY KEY,
  patient_id TEXT,
  temperature REAL,
  blood_pressure TEXT,
  heart_rate INTEGER,
  respiratory_rate INTEGER,
  oxygen_saturation REAL,
  recorded_at DATETIME
);
```

### appointments
```sql
CREATE TABLE appointments (
  id TEXT PRIMARY KEY,
  patient_id TEXT,
  doctor_name TEXT,
  department TEXT,
  appointment_date DATETIME,
  status TEXT DEFAULT 'scheduled',
  notes TEXT,
  created_at DATETIME
);
```

### prescriptions
```sql
CREATE TABLE prescriptions (
  id TEXT PRIMARY KEY,
  patient_id TEXT,
  doctor_name TEXT,
  medication TEXT,
  dosage TEXT,
  frequency TEXT,
  duration TEXT,
  notes TEXT,
  created_at DATETIME
);
```

## 🔌 API Endpoints

### Health Check
```
GET /api/health
Response: { status: "OK", message: "Mediqura Backend is running" }
```

### Demo Requests
```
POST   /api/demos                    - Create demo request
GET    /api/demos                    - Get all demo requests
GET    /api/demos/:id                - Get demo request by ID
PATCH  /api/demos/:id                - Update demo status
DELETE /api/demos/:id                - Delete demo request
```

### Patients
```
POST   /api/patients                 - Create patient
GET    /api/patients                 - Get all patients (filterable)
GET    /api/patients/:id             - Get patient with history
PATCH  /api/patients/:id             - Update patient
POST   /api/patients/:id/vitals      - Record patient vitals
```

### Analytics
```
GET /api/analytics/stats              - Dashboard statistics
GET /api/analytics/patients-by-dept   - Patients by department
GET /api/analytics/demo-status        - Demo request status
GET /api/analytics/recent-demos       - Recent 10 demos
GET /api/analytics/appointment-status - Appointment status
```

## 🧪 API Testing Examples

### Create Demo Request
```bash
curl -X POST http://localhost:5001/api/demos \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Dr. John Doe",
    "email": "john@hospital.com",
    "phone": "+91 9876543210",
    "hospital_name": "City Hospital",
    "message": "Interested in Mediqura"
  }'
```

### Get Dashboard Stats
```bash
curl http://localhost:5001/api/analytics/stats
```

### Create Patient
```bash
curl -X POST http://localhost:5001/api/patients \
  -H "Content-Type: application/json" \
  -d '{
    "uhid": "UH001",
    "name": "Raj Kumar",
    "email": "raj@email.com",
    "phone": "+91 9876543210",
    "age": 35,
    "gender": "M",
    "address": "123 Main St",
    "department": "Cardiology"
  }'
```

## 🎨 Frontend Features

### ✅ Implemented
- Responsive marketing website
- Contact form with backend integration
- Smooth scroll navigation
- Gradient design theme
- Mobile hamburger menu
- Product showcase sections
- Benefits & features display
- Footer with links
- Real-time form validation
- Success/Error messages

### 📝 Contact Form
- **Location**: CTA Section
- **Fields**: Name, Email, Phone, Hospital, Message
- **Backend**: Posts to `/api/demos`
- **Feedback**: Success/Error messages
- **Database**: Stored in demo_requests table

## 🔐 Security Features

- ✅ CORS enabled (http://localhost:5173)
- ✅ Input validation on backend
- ✅ SQL injection protection (parameterized queries)
- ✅ UUID for unique IDs
- ✅ Error handling middleware
- ✅ 404 routes handling

## 📊 Key Metrics Tracked

**Demos**
- Total requests
- Pending requests
- Status distribution

**Patients**
- Total patients
- Active patients
- By department
- By status

**Appointments**
- Total appointments
- Scheduled appointments

**Vitals**
- Temperature, Blood Pressure
- Heart Rate, O2 Saturation
- Respiratory Rate

## 🚀 Running Both Servers

### Terminal 1: Frontend
```bash
cd c:\Users\ayush\OneDrive\Desktop\med\medqura-frontend
npm run dev
```

### Terminal 2: Backend
```bash
cd c:\Users\ayush\OneDrive\Desktop\med\medqura-backend
node server.js
```

### Access the System
- Frontend: http://localhost:5173
- Backend API: http://localhost:5001
- Health Check: http://localhost:5001/api/health

## 📈 Next Steps

1. **Admin Dashboard**: Add patient management UI
2. **Authentication**: Implement user login/roles
3. **Email Integration**: Send confirmation emails
4. **SMS Alerts**: Appointment reminders
5. **Reporting**: Generate PDF reports
6. **Mobile App**: React Native mobile client
7. **Cloud Deployment**: Deploy to AWS/Azure
8. **Database Backup**: Automated backups

## 🛠️ Technologies

**Frontend**
- React 19
- Vite 8
- Tailwind CSS 4
- Lucide React (Icons)

**Backend**
- Node.js
- Express 4
- SQLite3
- CORS
- UUID

## 📱 Testing Checklist

- [ ] Frontend loads at http://localhost:5173
- [ ] Backend API health check passes
- [ ] Contact form submits successfully
- [ ] Demo data saved to database
- [ ] API returns correct responses
- [ ] CORS headers are set
- [ ] Mobile responsive works
- [ ] Form validation works
- [ ] Error messages display

## 🐛 Troubleshooting

**Port Already in Use**
```bash
# Kill process on port 5001 (Windows)
netstat -ano | findstr :5001
taskkill /PID <PID> /F
```

**Database Issues**
```bash
# Delete existing database to reset
rm c:\Users\ayush\OneDrive\Desktop\med\medqura-backend\mediqura.db
# Restart server to recreate
```

**CORS Errors**
- Ensure backend is running on 5001
- Check FRONTEND_URL in .env is correct
- Clear browser cache

## 📞 Support

- **Issues**: Check error messages in browser console
- **API Errors**: Check backend terminal output
- **Database**: Check mediqura.db file exists

---

**Status**: ✅ Fully Operational  
**Frontend**: Running on http://localhost:5173  
**Backend**: Running on http://localhost:5001  
**Database**: SQLite (mediqura.db)
