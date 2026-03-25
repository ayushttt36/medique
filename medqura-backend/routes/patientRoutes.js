import express from 'express';
import { v4 as uuidv4 } from 'uuid';
import { runQuery, getQuery, allQuery } from '../database/db.js';

const router = express.Router();

// Create Patient
router.post('/', async (req, res) => {
  try {
    const { uhid, name, email, phone, age, gender, address, department } = req.body;

    if (!uhid || !name) {
      return res.status(400).json({ error: 'UHID and name are required' });
    }

    const id = uuidv4();
    const query = `
      INSERT INTO patients (id, uhid, name, email, phone, age, gender, address, department, status)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, 'active')
    `;

    await runQuery(query, [id, uhid, name, email, phone, age, gender, address, department]);

    res.status(201).json({
      success: true,
      message: 'Patient created successfully',
      data: { id, uhid, name, status: 'active' }
    });
  } catch (error) {
    console.error('Error creating patient:', error);
    res.status(500).json({ error: 'Failed to create patient' });
  }
});

// Get All Patients
router.get('/', async (req, res) => {
  try {
    const { department, status } = req.query;
    let query = 'SELECT * FROM patients WHERE 1=1';
    const params = [];

    if (department) {
      query += ' AND department = ?';
      params.push(department);
    }

    if (status) {
      query += ' AND status = ?';
      params.push(status);
    }

    query += ' ORDER BY created_at DESC';
    const patients = await allQuery(query, params);

    res.json({
      total: patients.length,
      data: patients
    });
  } catch (error) {
    console.error('Error fetching patients:', error);
    res.status(500).json({ error: 'Failed to fetch patients' });
  }
});

// Get Single Patient
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const query = 'SELECT * FROM patients WHERE id = ?';
    const patient = await getQuery(query, [id]);

    if (!patient) {
      return res.status(404).json({ error: 'Patient not found' });
    }

    // Get patient vitals
    const vitalsQuery = 'SELECT * FROM patient_vitals WHERE patient_id = ? ORDER BY recorded_at DESC LIMIT 10';
    const vitals = await allQuery(vitalsQuery, [id]);

    // Get patient appointments
    const appointmentsQuery = 'SELECT * FROM appointments WHERE patient_id = ? ORDER BY appointment_date DESC';
    const appointments = await allQuery(appointmentsQuery, [id]);

    // Get patient prescriptions
    const prescriptionsQuery = 'SELECT * FROM prescriptions WHERE patient_id = ? ORDER BY created_at DESC';
    const prescriptions = await allQuery(prescriptionsQuery, [id]);

    res.json({
      patient,
      vitals,
      appointments,
      prescriptions
    });
  } catch (error) {
    console.error('Error fetching patient:', error);
    res.status(500).json({ error: 'Failed to fetch patient' });
  }
});

// Update Patient
router.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, phone, age, gender, address, department, status } = req.body;

    let query = 'UPDATE patients SET updated_at = CURRENT_TIMESTAMP';
    const params = [];

    if (name) {
      query += ', name = ?';
      params.push(name);
    }
    if (email) {
      query += ', email = ?';
      params.push(email);
    }
    if (phone) {
      query += ', phone = ?';
      params.push(phone);
    }
    if (age) {
      query += ', age = ?';
      params.push(age);
    }
    if (gender) {
      query += ', gender = ?';
      params.push(gender);
    }
    if (address) {
      query += ', address = ?';
      params.push(address);
    }
    if (department) {
      query += ', department = ?';
      params.push(department);
    }
    if (status) {
      query += ', status = ?';
      params.push(status);
    }

    query += ' WHERE id = ?';
    params.push(id);

    const result = await runQuery(query, params);

    if (result.changes === 0) {
      return res.status(404).json({ error: 'Patient not found' });
    }

    res.json({
      success: true,
      message: 'Patient updated successfully'
    });
  } catch (error) {
    console.error('Error updating patient:', error);
    res.status(500).json({ error: 'Failed to update patient' });
  }
});

// Add Patient Vitals
router.post('/:id/vitals', async (req, res) => {
  try {
    const { id } = req.params;
    const { temperature, blood_pressure, heart_rate, respiratory_rate, oxygen_saturation } = req.body;

    const vitalId = uuidv4();
    const query = `
      INSERT INTO patient_vitals (id, patient_id, temperature, blood_pressure, heart_rate, respiratory_rate, oxygen_saturation)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `;

    await runQuery(query, [vitalId, id, temperature, blood_pressure, heart_rate, respiratory_rate, oxygen_saturation]);

    res.status(201).json({
      success: true,
      message: 'Vitals recorded successfully',
      data: { id: vitalId }
    });
  } catch (error) {
    console.error('Error recording vitals:', error);
    res.status(500).json({ error: 'Failed to record vitals' });
  }
});

export default router;
