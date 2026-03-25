import express from 'express';
import { allQuery, getQuery } from '../database/db.js';

const router = express.Router();

// User login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password required' });
    }

    const user = await getQuery('SELECT id, name, email, role FROM users WHERE email = ? AND password = ?', [email, password]);

    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Simple auth token (demo): base64 user id
    const token = Buffer.from(user.id).toString('base64');

    res.json({ success: true, user, token });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: 'Login failed' });
  }
});

// Optional: get all users (admin only, in future)
router.get('/users', async (req, res) => {
  try {
    const users = await allQuery('SELECT id, name, email, role, created_at FROM users ORDER BY created_at DESC');
    res.json({ total: users.length, data: users });
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Failed to fetch users' });
  }
});

export default router;
