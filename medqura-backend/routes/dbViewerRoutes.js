import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { allQuery } from '../database/db.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const router = express.Router();

// Dashboard page
router.get('/', async (req, res) => {
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>Mediqura Database Viewer</title>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          min-height: 100vh;
          padding: 20px;
        }
        .container {
          max-width: 1400px;
          margin: 0 auto;
        }
        header {
          background: white;
          padding: 30px;
          border-radius: 10px;
          margin-bottom: 30px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        }
        h1 {
          color: #667eea;
          margin-bottom: 10px;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .subtitle {
          color: #666;
          font-size: 14px;
        }
        nav {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          margin-top: 20px;
          border-top: 1px solid #eee;
          padding-top: 20px;
        }
        button {
          background: #667eea;
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 5px;
          cursor: pointer;
          font-size: 14px;
          transition: all 0.3s;
        }
        button:hover {
          background: #764ba2;
          transform: translateY(-2px);
        }
        button.active {
          background: #764ba2;
          box-shadow: 0 5px 15px rgba(118, 75, 162, 0.4);
        }
        .content {
          background: white;
          border-radius: 10px;
          padding: 30px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        }
        .table-section {
          display: none;
        }
        .table-section.active {
          display: block;
        }
        h2 {
          color: #667eea;
          margin-bottom: 20px;
          padding-bottom: 10px;
          border-bottom: 2px solid #f0f0f0;
        }
        table {
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 20px;
        }
        th {
          background: #f5f5f5;
          color: #333;
          padding: 12px;
          text-align: left;
          font-weight: 600;
          border-bottom: 2px solid #ddd;
        }
        td {
          padding: 12px;
          border-bottom: 1px solid #eee;
        }
        tr:hover {
          background: #f9f9f9;
        }
        .empty {
          text-align: center;
          color: #999;
          padding: 40px 20px;
          font-size: 16px;
        }
        .stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 15px;
          margin-bottom: 30px;
        }
        .stat-card {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 20px;
          border-radius: 10px;
          text-align: center;
        }
        .stat-value {
          font-size: 24px;
          font-weight: bold;
        }
        .stat-label {
          font-size: 12px;
          opacity: 0.9;
          margin-top: 5px;
        }
        .actions {
          margin-top: 20px;
          padding: 15px;
          background: #f9f9f9;
          border-radius: 5px;
        }
        a {
          color: #667eea;
          text-decoration: none;
          margin-right: 20px;
        }
        a:hover {
          text-decoration: underline;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <header>
          <h1>🏥 Mediqura Database Viewer</h1>
          <p class="subtitle">Real-time database monitoring and inspection</p>
          
          <nav>
            <button class="tab-btn active" data-table="stats">📊 Dashboard</button>
            <button class="tab-btn" data-table="demo_requests">📩 Demo Requests</button>
            <button class="tab-btn" data-table="patients">👥 Patients</button>
            <button class="tab-btn" data-table="appointments">📅 Appointments</button>
            <button class="tab-btn" data-table="patient_vitals">💓 Vitals</button>
            <button class="tab-btn" data-table="prescriptions">💊 Prescriptions</button>
          </nav>
        </header>

        <div class="content">
          <!-- Dashboard Stats -->
          <div id="stats" class="table-section active">
            <h2>📊 Dashboard Statistics</h2>
            <div class="stats" id="stats-container">
              <div class="stat-card">
                <div class="stat-value" id="demo-count">0</div>
                <div class="stat-label">Demo Requests</div>
              </div>
              <div class="stat-card">
                <div class="stat-value" id="patient-count">0</div>
                <div class="stat-label">Patients</div>
              </div>
              <div class="stat-card">
                <div class="stat-value" id="appointment-count">0</div>
                <div class="stat-label">Appointments</div>
              </div>
              <div class="stat-card">
                <div class="stat-value" id="vitals-count">0</div>
                <div class="stat-label">Vitals Records</div>
              </div>
              <div class="stat-card">
                <div class="stat-value" id="prescription-count">0</div>
                <div class="stat-label">Prescriptions</div>
              </div>
            </div>
            
            <h2>🔗 Quick Links</h2>
            <div class="actions">
              <a href="http://localhost:5001/api/demos" target="_blank">View All Demos (JSON)</a>
              <a href="http://localhost:5001/api/patients" target="_blank">View All Patients (JSON)</a>
              <a href="http://localhost:5001/api/analytics/stats" target="_blank">View Stats (JSON)</a>
            </div>
          </div>

          <!-- Tables -->
          <div id="demo_requests" class="table-section">
            <h2>📩 Demo Requests</h2>
            <table id="demo_requests-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Hospital</th>
                  <th>Status</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody id="demo_requests-tbody">
              </tbody>
            </table>
          </div>

          <div id="patients" class="table-section">
            <h2>👥 Patients</h2>
            <table id="patients-table">
              <thead>
                <tr>
                  <th>UHID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Age</th>
                  <th>Gender</th>
                  <th>Department</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody id="patients-tbody">
              </tbody>
            </table>
          </div>

          <div id="appointments" class="table-section">
            <h2>📅 Appointments</h2>
            <table id="appointments-table">
              <thead>
                <tr>
                  <th>Patient ID</th>
                  <th>Doctor</th>
                  <th>Department</th>
                  <th>Date</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody id="appointments-tbody">
              </tbody>
            </table>
          </div>

          <div id="patient_vitals" class="table-section">
            <h2>💓 Patient Vitals</h2>
            <table id="patient_vitals-table">
              <thead>
                <tr>
                  <th>Patient ID</th>
                  <th>Temperature</th>
                  <th>Blood Pressure</th>
                  <th>Heart Rate</th>
                  <th>O2 Saturation</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody id="patient_vitals-tbody">
              </tbody>
            </table>
          </div>

          <div id="prescriptions" class="table-section">
            <h2>💊 Prescriptions</h2>
            <table id="prescriptions-table">
              <thead>
                <tr>
                  <th>Patient ID</th>
                  <th>Doctor</th>
                  <th>Medication</th>
                  <th>Dosage</th>
                  <th>Frequency</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody id="prescriptions-tbody">
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <script>
        // Tab switching
        document.querySelectorAll('.tab-btn').forEach(btn => {
          btn.addEventListener('click', () => {
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.table-section').forEach(s => s.classList.remove('active'));
            
            btn.classList.add('active');
            document.getElementById(btn.dataset.table).classList.add('active');
            
            if (btn.dataset.table !== 'stats') {
              loadTableData(btn.dataset.table);
            } else {
              loadStats();
            }
          });
        });

        async function loadStats() {
          try {
            const tables = ['demo_requests', 'patients', 'appointments', 'patient_vitals', 'prescriptions'];
            
            for (const table of tables) {
              const response = await fetch(\`/api/\${table}\`);
              const data = await response.json();
              const count = data.total || 0;
              document.getElementById(\`\${table}-count\`).textContent = count;
            }
          } catch (error) {
            console.error('Error loading stats:', error);
          }
        }

        async function loadTableData(table) {
          try {
            let endpoint = \`/api/\${table}\`;
            const response = await fetch(endpoint);
            const data = await response.json();
            const rows = data.data || [];
            const tbody = document.getElementById(\`\${table}-tbody\`);
            
            tbody.innerHTML = '';
            
            if (rows.length === 0) {
              tbody.innerHTML = \`<tr><td colspan="10" class="empty">No data available</td></tr>\`;
            } else {
              rows.forEach(row => {
                const tr = document.createElement('tr');
                const cells = Object.values(row).slice(0, 6).map(val => 
                  \`<td>\${val ? String(val).substring(0, 50) : '-'}</td>\`
                ).join('');
                tr.innerHTML = cells;
                tbody.appendChild(tr);
              });
            }
          } catch (error) {
            console.error('Error loading table:', error);
          }
        }

        // Load stats on page load
        loadStats();
      </script>
    </body>
    </html>
  `;
  res.send(html);
});

export default router;
