import express from 'express';
import { v4 as uuidv4 } from 'uuid';
import { runQuery, getQuery, allQuery } from '../database/db.js';

const router = express.Router();

// Create Demo Request
router.post('/', async (req, res) => {
  try {
    const { name, email, phone, hospital_name, message } = req.body;

    // Validation
    if (!name || !email) {
      return res.status(400).json({ error: 'Name and email are required' });
    }

    const id = uuidv4();
    const query = `
      INSERT INTO demo_requests (id, name, email, phone, hospital_name, message, status)
      VALUES (?, ?, ?, ?, ?, ?, 'pending')
    `;

    await runQuery(query, [id, name, email, phone, hospital_name, message]);

    res.status(201).json({
      success: true,
      message: 'Demo request submitted successfully',
      data: { id, name, email, hospital_name, status: 'pending' }
    });
  } catch (error) {
    console.error('Error creating demo request:', error);
    res.status(500).json({ error: 'Failed to create demo request' });
  }
});

// Get All Demo Requests
router.get('/', async (req, res) => {
  try {
    const query = 'SELECT * FROM demo_requests ORDER BY created_at DESC';
    const requests = await allQuery(query);
    res.json({
      total: requests.length,
      data: requests
    });
  } catch (error) {
    console.error('Error fetching demo requests:', error);
    res.status(500).json({ error: 'Failed to fetch demo requests' });
  }
});

// Get Single Demo Request
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const query = 'SELECT * FROM demo_requests WHERE id = ?';
    const request = await getQuery(query, [id]);

    if (!request) {
      return res.status(404).json({ error: 'Demo request not found' });
    }

    res.json(request);
  } catch (error) {
    console.error('Error fetching demo request:', error);
    res.status(500).json({ error: 'Failed to fetch demo request' });
  }
});

// Update Demo Request Status
router.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (!['pending', 'scheduled', 'completed', 'cancelled'].includes(status)) {
      return res.status(400).json({ error: 'Invalid status' });
    }

    const query = `
      UPDATE demo_requests 
      SET status = ?, updated_at = CURRENT_TIMESTAMP
      WHERE id = ?
    `;

    const result = await runQuery(query, [status, id]);

    if (result.changes === 0) {
      return res.status(404).json({ error: 'Demo request not found' });
    }

    res.json({
      success: true,
      message: 'Demo request updated successfully'
    });
  } catch (error) {
    console.error('Error updating demo request:', error);
    res.status(500).json({ error: 'Failed to update demo request' });
  }
});

// Delete Demo Request
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const query = 'DELETE FROM demo_requests WHERE id = ?';
    const result = await runQuery(query, [id]);

    if (result.changes === 0) {
      return res.status(404).json({ error: 'Demo request not found' });
    }

    res.json({
      success: true,
      message: 'Demo request deleted successfully'
    });
  } catch (error) {
    console.error('Error deleting demo request:', error);
    res.status(500).json({ error: 'Failed to delete demo request' });
  }
});

export default router;
