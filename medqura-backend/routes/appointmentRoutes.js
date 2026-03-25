import express from 'express';
import { v4 as uuidv4 } from 'uuid';
import { runQuery, getQuery, allQuery } from '../database/db.js';

const router = express.Router();

// Create Appointment
router.post('/', async (req, res) => {
  try {
    const { patient_id, doctor_name, department, appointment_date, status, notes } = req.body;

    if (!patient_id || !doctor_name || !department || !appointment_date) {
      return res.status(400).json({ error: 'patient_id, doctor_name, department, and appointment_date are required' });
    }

    const id = uuidv4();
    const query = `
      INSERT INTO appointments (id, patient_id, doctor_name, department, appointment_date, status, notes)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `;

    await runQuery(query, [id, patient_id, doctor_name, department, appointment_date, status || 'scheduled', notes || '']);

    res.status(201).json({
      success: true,
      message: 'Appointment created successfully',
      data: { id, patient_id, doctor_name, department, appointment_date, status: status || 'scheduled', notes }
    });
  } catch (error) {
    console.error('Error creating appointment:', error);
    res.status(500).json({ error: 'Failed to create appointment' });
  }
});

// Get all Appointments
router.get('/', async (req, res) => {
  try {
    const { patient_id, status } = req.query;
    let query = 'SELECT * FROM appointments WHERE 1=1';
    const params = [];

    if (patient_id) {
      query += ' AND patient_id = ?';
      params.push(patient_id);
    }
    if (status) {
      query += ' AND status = ?';
      params.push(status);
    }
    query += ' ORDER BY appointment_date DESC';

    const rows = await allQuery(query, params);
    res.json({ total: rows.length, data: rows });
  } catch (error) {
    console.error('Error fetching appointments:', error);
    res.status(500).json({ error: 'Failed to fetch appointments' });
  }
});

// Get Single Appointment
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const appointment = await getQuery('SELECT * FROM appointments WHERE id = ?', [id]);
    if (!appointment) {
      return res.status(404).json({ error: 'Appointment not found' });
    }
    res.json(appointment);
  } catch (error) {
    console.error('Error fetching appointment:', error);
    res.status(500).json({ error: 'Failed to fetch appointment' });
  }
});

// Update Appointment
router.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { doctor_name, department, appointment_date, status, notes } = req.body;

    if (!doctor_name && !department && !appointment_date && !status && !notes) {
      return res.status(400).json({ error: 'No valid fields provided to update' });
    }

    let query = 'UPDATE appointments SET updated_at = CURRENT_TIMESTAMP';
    const params = [];

    if (doctor_name) {
      query += ', doctor_name = ?';
      params.push(doctor_name);
    }
    if (department) {
      query += ', department = ?';
      params.push(department);
    }
    if (appointment_date) {
      query += ', appointment_date = ?';
      params.push(appointment_date);
    }
    if (status) {
      query += ', status = ?';
      params.push(status);
    }
    if (notes !== undefined) {
      query += ', notes = ?';
      params.push(notes);
    }

    query += ' WHERE id = ?';
    params.push(id);

    const result = await runQuery(query, params);
    if (result.changes === 0) {
      return res.status(404).json({ error: 'Appointment not found' });
    }

    res.json({ success: true, message: 'Appointment updated successfully' });
  } catch (error) {
    console.error('Error updating appointment:', error);
    res.status(500).json({ error: 'Failed to update appointment' });
  }
});

// Delete Appointment
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await runQuery('DELETE FROM appointments WHERE id = ?', [id]);
    if (result.changes === 0) {
      return res.status(404).json({ error: 'Appointment not found' });
    }
    res.json({ success: true, message: 'Appointment deleted successfully' });
  } catch (error) {
    console.error('Error deleting appointment:', error);
    res.status(500).json({ error: 'Failed to delete appointment' });
  }
});

export default router;
