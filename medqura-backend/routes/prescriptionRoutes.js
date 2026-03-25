import express from 'express';
import { v4 as uuidv4 } from 'uuid';
import { runQuery, getQuery, allQuery } from '../database/db.js';

const router = express.Router();

// Create Prescription
router.post('/', async (req, res) => {
  try {
    const { patient_id, doctor_name, medication, dosage, frequency, duration, notes } = req.body;

    if (!patient_id || !doctor_name || !medication || !dosage) {
      return res.status(400).json({ error: 'patient_id, doctor_name, medication, and dosage are required' });
    }

    const id = uuidv4();
    const query = `
      INSERT INTO prescriptions (id, patient_id, doctor_name, medication, dosage, frequency, duration, notes)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;

    await runQuery(query, [id, patient_id, doctor_name, medication, dosage, frequency || '', duration || '', notes || '']);

    res.status(201).json({
      success: true,
      message: 'Prescription created successfully',
      data: { id, patient_id, doctor_name, medication, dosage, frequency, duration, notes }
    });
  } catch (error) {
    console.error('Error creating prescription:', error);
    res.status(500).json({ error: 'Failed to create prescription' });
  }
});

// Get all Prescriptions
router.get('/', async (req, res) => {
  try {
    const { patient_id } = req.query;
    let query = 'SELECT * FROM prescriptions WHERE 1=1';
    const params = [];

    if (patient_id) {
      query += ' AND patient_id = ?';
      params.push(patient_id);
    }

    query += ' ORDER BY created_at DESC';

    const rows = await allQuery(query, params);
    res.json({ total: rows.length, data: rows });
  } catch (error) {
    console.error('Error fetching prescriptions:', error);
    res.status(500).json({ error: 'Failed to fetch prescriptions' });
  }
});

// Get Single Prescription
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const prescription = await getQuery('SELECT * FROM prescriptions WHERE id = ?', [id]);
    if (!prescription) {
      return res.status(404).json({ error: 'Prescription not found' });
    }
    res.json(prescription);
  } catch (error) {
    console.error('Error fetching prescription:', error);
    res.status(500).json({ error: 'Failed to fetch prescription' });
  }
});

// Update Prescription
router.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { doctor_name, medication, dosage, frequency, duration, notes } = req.body;

    if (!doctor_name && !medication && !dosage && !frequency && !duration && !notes) {
      return res.status(400).json({ error: 'No valid fields provided to update' });
    }

    let query = 'UPDATE prescriptions SET updated_at = CURRENT_TIMESTAMP';
    const params = [];

    if (doctor_name) {
      query += ', doctor_name = ?';
      params.push(doctor_name);
    }
    if (medication) {
      query += ', medication = ?';
      params.push(medication);
    }
    if (dosage) {
      query += ', dosage = ?';
      params.push(dosage);
    }
    if (frequency !== undefined) {
      query += ', frequency = ?';
      params.push(frequency);
    }
    if (duration !== undefined) {
      query += ', duration = ?';
      params.push(duration);
    }
    if (notes !== undefined) {
      query += ', notes = ?';
      params.push(notes);
    }

    query += ' WHERE id = ?';
    params.push(id);

    const result = await runQuery(query, params);

    if (result.changes === 0) {
      return res.status(404).json({ error: 'Prescription not found' });
    }

    res.json({ success: true, message: 'Prescription updated successfully' });
  } catch (error) {
    console.error('Error updating prescription:', error);
    res.status(500).json({ error: 'Failed to update prescription' });
  }
});

// Delete Prescription
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await runQuery('DELETE FROM prescriptions WHERE id = ?', [id]);
    if (result.changes === 0) {
      return res.status(404).json({ error: 'Prescription not found' });
    }
    res.json({ success: true, message: 'Prescription deleted successfully' });
  } catch (error) {
    console.error('Error deleting prescription:', error);
    res.status(500).json({ error: 'Failed to delete prescription' });
  }
});

export default router;
