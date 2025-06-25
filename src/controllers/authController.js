import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import pool from '../config/db.js';
import { queries } from '../models/queries.js';
import dotenv from 'dotenv';
dotenv.config();


const JWT_SECRET = process.env.JWT_SECRET;

export const signup = async (req, res, next) => {
    try {
        const { name, email, password, role } = req.body;

        if (!['user', 'admin'].includes(role)) {
            return res.status(400).json({ message: "Invalid role" });
        }

        const userCheck = await pool.query(queries.findUserByEmail, [email]);
        if (userCheck.rows.length > 0) {
            return res.status(400).json({ message: "User already registered" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const result = await pool.query(queries.createUser, [name, email, hashedPassword, role]);
        const user = result.rows[0];

        res.status(201).json({
            message: 'User registered successfully',
            user: { id: user.id, name: user.name, email: user.email, role: user.role }
        });
    }
    catch (err) {
        next(err);
    }
};

export const signin = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        const result = await pool.query(queries.findUserByEmail, [email]);
        const user = result.rows[0];

        if (!user) return res.status(400).json({ error: "Invalid credentials" });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ error: "Invalid credentials" });

        const token = jwt.sign({ userId: user.id, role: user.role }, JWT_SECRET, { expiresIn: '7d' });

        res.status(200).json({
            message: 'Login successful',
            user: { id: user.id, name: user.name, email: user.email, role: user.role, token: token }
        });
    } catch (err) {
        next(err);
    }
};

