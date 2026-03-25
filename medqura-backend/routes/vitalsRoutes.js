import express from 'express';
import { v4 as uuidv4 } from 'uuid';
import { runQuery, getQuery, allQuery } from '../database/db.js';

const router = express.Router();

// Create vitals
router.post('/', async (req, res) => {
  try {
    const { patient_id, temperature, blood_pressure, heart_rate, respiratory_rate, oxygen_saturation } = req.body;

    if (!patient_id) {
      return res.status(400).json({ error: 'patient_id is required' });
    }

    const id = uuidv4();
    await runQuery(
      `INSERT INTO patient_vitals (id, patient_id, temperature, blood_pressure, heart_rate, respiratory_rate, oxygen_saturation) VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [id, patient_id, temperature || null, blood_pressure || '', heart_rate || null, respiratory_rate || null, oxygen_saturation || null]
    );

    res.status(201).json({ success: true, message: 'Vital record created successfully', data: { id, patient_id } });
  } catch (error) {
    console.error('Error creating vital record:', error);
    res.status(500).json({ error: 'Failed to create vital record' });
  }
});

// Get all vitals
router.get('/', async (req, res) => {
  try {
    const { patient_id } = req.query;
    let query = 'SELECT * FROM patient_vitals WHERE 1=1';
    const params = [];
    if (patient_id) {
      query += ' AND patient_id = ?';
      params.push(patient_id);
    }
    query += ' ORDER BY recorded_at DESC';

    const rows = await allQuery(query, params);
    res.json({ total: rows.length, data: rows });
  } catch (error) {
    console.error('Error fetching vitals:', error);
    res.status(500).json({ error: 'Failed to fetch vitals' });
  }
});

// Get vital by ID
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const item = await getQuery('SELECT * FROM patient_vitals WHERE id = ?', [id]);
    if (!item) {
      return res.status(404).json({ error: 'Vital record not found' });
    }
    res.json(item);
  } catch (error) {
    console.error('Error fetching vital record:', error);
    res.status(500).json({ error: 'Failed to fetch vital record' });
  }
});

// Delete vital
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await runQuery('DELETE FROM patient_vitals WHERE id = ?', [id]);
    if (result.changes === 0) {
      return res.status(404).json({ error: 'Vital record not found' });
    }
    res.json({ success: true, message: 'Vital record deleted successfully' });
  } catch (error) {
    console.error('Error deleting vital record:', error);
    res.status(500).json({ error: 'Failed to delete vital record' });
  }
});

export default router;
