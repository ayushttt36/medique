# How to View the Mediqura Database

There are **5 easy ways** to view your SQLite database:

---

## **Method 1: Web-Based Database Viewer** ⭐ (EASIEST)

Open your browser and go to:
```
http://localhost:5001/viewer
```

### Features:
- ✅ Beautiful dashboard interface
- ✅ Real-time statistics
- ✅ All tables in organized tabs
- ✅ Click buttons to view data
- ✅ Direct JSON API links
- ✅ No installation needed

**Screenshot Features:**
- 📊 Dashboard with record counts
- 📩 Demo Requests table
- 👥 Patients table
- 📅 Appointments table
- 💓 Vitals table
- 💊 Prescriptions table

---

## **Method 2: API Endpoints** (Real-time JSON)

Visit these URLs directly in your browser:

### Demo Requests
```
http://localhost:5001/api/demos
```

### Patients
```
http://localhost:5001/api/patients
```

### Analytics Dashboard
```
http://localhost:5001/api/analytics/stats
```

### Department Breakdown
```
http://localhost:5001/api/analytics/patients-by-department
```

### All Endpoints
```
GET  http://localhost:5001/api/demos
GET  http://localhost:5001/api/patients
GET  http://localhost:5001/api/appointments
GET  http://localhost:5001/api/prescriptions
GET  http://localhost:5001/api/patient_vitals
GET  http://localhost:5001/api/analytics/stats
GET  http://localhost:5001/api/analytics/demo-status
GET  http://localhost:5001/api/analytics/recent-demos
GET  http://localhost:5001/api/analytics/appointment-status
```

---

## **Method 3: Terminal Database Viewer Script**

Run this command to print all database data to terminal:

```bash
cd c:\Users\ayush\OneDrive\Desktop\med\medqura-backend
node viewDatabase.js
```

**Output Shows:**
- ✅ All tables
- ✅ Record count for each table
- ✅ Complete table data
- ✅ Formatted display

---

## **Method 4: SQLite Browser (GUI Tool)** 

### Option A: Downloads (Visual Tool)
1. Download **DB Browser for SQLite**: https://sqlitebrowser.org/
2. Open the file: `c:\Users\ayush\OneDrive\Desktop\med\medqura-backend\mediqura.db`
3. Browse tables visually

### Option B: VS Code Extension
1. Install extension: **SQLite** (by alexcvzz)
2. Open Command Palette: `Ctrl+Shift+P`
3. Search: `SQLite: Open Database`
4. Select: `mediqura.db`
5. View tables in sidebar

---

## **Method 5: PowerShell Script**

Create and run a PowerShell script:

```powershell
$dbPath = "c:\Users\ayush\OneDrive\Desktop\med\medqura-backend\mediqura.db"

# Using Node.js to query
cd "c:\Users\ayush\OneDrive\Desktop\med\medqura-backend"
node -e "
  import sqlite3 from 'sqlite3';
  const db = new sqlite3.Database('mediqura.db');
  db.all('SELECT * FROM demo_requests', (err, rows) => {
    console.log(JSON.stringify(rows, null, 2));
    db.close();
  });
" --input-type=module
```

---

## 🎯 Quick Reference

| Method | Access | Best For |
|--------|--------|----------|
| **Web Viewer** | http://localhost:5001/viewer | Visual browsing |
| **API Endpoints** | http://localhost:5001/api/demos | Developers, Testing |
| **Terminal Script** | `node viewDatabase.js` | Quick checks |
| **DB Browser** | Download tool | Advanced users |
| **VS Code** | Extension | IDE integration |

---

## 📊 Database Tables

### 1. demo_requests
```
Columns: id, name, email, phone, hospital_name, message, status, created_at, updated_at
```

### 2. patients
```
Columns: id, uhid, name, email, phone, age, gender, address, admission_date, department, status, created_at, updated_at
```

### 3. patient_vitals
```
Columns: id, patient_id, temperature, blood_pressure, heart_rate, respiratory_rate, oxygen_saturation, recorded_at
```

### 4. appointments
```
Columns: id, patient_id, doctor_name, department, appointment_date, status, notes, created_at
```

### 5. prescriptions
```
Columns: id, patient_id, doctor_name, medication, dosage, frequency, duration, notes, created_at
```

---

## 🧪 Test the System

1. **Open Website**: http://localhost:5173
2. **Fill Demo Form**: Enter your name, email, etc.
3. **Submit Form**
4. **View Data**:
   - Web Viewer: http://localhost:5001/viewer
   - API: http://localhost:5001/api/demos
   - Terminal: `node viewDatabase.js`

---

## 🔍 Sample Query Results

When you visit `http://localhost:5001/api/demos`, you'll see JSON like:

```json
{
  "total": 2,
  "data": [
    {
      "id": "550e8400-e29b-41d4-a716-446655440000",
      "name": "Dr. John Doe",
      "email": "john@hospital.com",
      "phone": "+91 9876543210",
      "hospital_name": "City Hospital",
      "message": "Interested in Mediqura",
      "status": "pending",
      "created_at": "2026-03-24 10:30:45",
      "updated_at": "2026-03-24 10:30:45"
    }
  ]
}
```

---

## ⚡ Pro Tips

1. **Database File**: `c:\Users\ayush\OneDrive\Desktop\med\medqura-backend\mediqura.db`

2. **Live Updates**: Refresh browser to see new data in real-time

3. **Delete Records**:
   ```bash
   # Via API:
   curl -X DELETE http://localhost:5001/api/demos/[id]
   ```

4. **Export Data**: Copy JSON from API directly to use elsewhere

5. **Watch Database**: Keep terminal open with:
   ```bash
   watch -n 1 "node viewDatabase.js"  # (on Linux/Mac)
   ```

---

## 🚀 Recommended Approach

**For Most Users:**
1. Start with **Web Viewer**: http://localhost:5001/viewer
2. For testing: Use **API Endpoints**
3. For deep inspection: Use **DB Browser tool**

---

## 📞 Support

If database viewer doesn't load:
1. Ensure backend is running: `http://localhost:5001/api/health`
2. Check backend is on port 5001 (not 5000)
3. Reload page (Ctrl+Shift+R)
4. Check browser console for errors

---

**Your database is now fully viewable in multiple ways!** 🎉
