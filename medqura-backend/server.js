import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import { initializeDatabase } from './database/db.js';
import demoRoutes from './routes/demoRoutes.js';
import patientRoutes from './routes/patientRoutes.js';
import appointmentRoutes from './routes/appointmentRoutes.js';
import prescriptionRoutes from './routes/prescriptionRoutes.js';
import vitalsRoutes from './routes/vitalsRoutes.js';
import analyticsRoutes from './routes/analyticsRoutes.js';
import dbViewerRoutes from './routes/dbViewerRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Initialize Database
initializeDatabase();

// Routes
app.use('/api/demos', demoRoutes);
app.use('/api/patients', patientRoutes);
app.use('/api/appointments', appointmentRoutes);
app.use('/api/prescriptions', prescriptionRoutes);
app.use('/api/patient_vitals', vitalsRoutes);
app.use('/api/analytics', analyticsRoutes);
app.use('/viewer', dbViewerRoutes);

// Health Check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Mediqura Backend is running' });
});

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({ 
    error: 'Internal Server Error', 
    message: err.message 
  });
});

// 404 Handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Start Server
app.listen(PORT, () => {
  console.log(`✅ Mediqura Backend Server running on http://localhost:${PORT}`);
  console.log(`📊 Database: ${process.env.DATABASE || 'mediqura.db'}`);
  console.log(`🔗 Frontend URL: ${process.env.FRONTEND_URL}`);
});
