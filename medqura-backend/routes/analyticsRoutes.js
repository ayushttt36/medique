import express from 'express';
import { allQuery, getQuery } from '../database/db.js';

const router = express.Router();

// Dashboard Stats
router.get('/stats', async (req, res) => {
  try {
    // Total Patients
    const patientCount = await getQuery('SELECT COUNT(*) as count FROM patients');
    
    // Active Patients
    const activePatients = await getQuery('SELECT COUNT(*) as count FROM patients WHERE status = "active"');
    
    // Total Demo Requests
    const demoCount = await getQuery('SELECT COUNT(*) as count FROM demo_requests');
    
    // Pending Demo Requests
    const pendingDemos = await getQuery('SELECT COUNT(*) as count FROM demo_requests WHERE status = "pending"');
    
    // Total Appointments
    const appointmentCount = await getQuery('SELECT COUNT(*) as count FROM appointments');
    
    // Scheduled Appointments
    const scheduledAppointments = await getQuery('SELECT COUNT(*) as count FROM appointments WHERE status = "scheduled"');

    res.json({
      patients: {
        total: patientCount.count,
        active: activePatients.count
      },
      demoRequests: {
        total: demoCount.count,
        pending: pendingDemos.count
      },
      appointments: {
        total: appointmentCount.count,
        scheduled: scheduledAppointments.count
      }
    });
  } catch (error) {
    console.error('Error fetching stats:', error);
    res.status(500).json({ error: 'Failed to fetch stats' });
  }
});

// Patients by Department
router.get('/patients-by-department', async (req, res) => {
  try {
    const query = `
      SELECT department, COUNT(*) as count 
      FROM patients 
      WHERE department IS NOT NULL AND department != ''
      GROUP BY department
      ORDER BY count DESC
    `;
    const data = await allQuery(query);

    res.json({
      chartType: 'bar',
      title: 'Patients by Department',
      data: data
    });
  } catch (error) {
    console.error('Error fetching department stats:', error);
    res.status(500).json({ error: 'Failed to fetch department stats' });
  }
});

// Demo Requests Status
router.get('/demo-status', async (req, res) => {
  try {
    const query = `
      SELECT status, COUNT(*) as count 
      FROM demo_requests 
      GROUP BY status
    `;
    const data = await allQuery(query);

    res.json({
      chartType: 'pie',
      title: 'Demo Request Status',
      data: data
    });
  } catch (error) {
    console.error('Error fetching demo stats:', error);
    res.status(500).json({ error: 'Failed to fetch demo stats' });
  }
});

// Recent Demo Requests
router.get('/recent-demos', async (req, res) => {
  try {
    const query = `
      SELECT id, name, email, hospital_name, status, created_at 
      FROM demo_requests 
      ORDER BY created_at DESC 
      LIMIT 10
    `;
    const data = await allQuery(query);

    res.json({
      total: data.length,
      data: data
    });
  } catch (error) {
    console.error('Error fetching recent demos:', error);
    res.status(500).json({ error: 'Failed to fetch recent demos' });
  }
});

// Appointment Status
router.get('/appointment-status', async (req, res) => {
  try {
    const query = `
      SELECT status, COUNT(*) as count 
      FROM appointments 
      GROUP BY status
    `;
    const data = await allQuery(query);

    res.json({
      chartType: 'pie',
      title: 'Appointment Status',
      data: data
    });
  } catch (error) {
    console.error('Error fetching appointment stats:', error);
    res.status(500).json({ error: 'Failed to fetch appointment stats' });
  }
});

export default router;
