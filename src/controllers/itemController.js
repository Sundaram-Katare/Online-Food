import pool from '../config/db.js';
import { itemQueries } from '../models/queries.js';
import path from 'path';

export const getItems = async (req, res, next) => {
    try {
        const result = await pool.query(itemQueries.getAll);
        res.json(result.rows);
    } catch (err) {
        next(err);
    }
};

export const addItem = async (req, res, next) => {
    try {
        const { name, price } = req.body;
        const image = req.file?.filename || null;
        const imageUrl = image ? `/uploads/${image}` : null;

        const result = await pool.query(itemQueries.add, [name, price, imageUrl]);
        res.status(201).json(result.rows[0]);
    } catch (err) {
        next(err);
    }
};

export const updateItem = async (req, res, next) => {
    try {
        const id = req.params.id;
        const { name, price } = req.body;
        const image = req.file?.filename || null;
        const imageUrl = image ? `/uploads/${image}` : null;

        const result = await pool.query(itemQueries.update, [name, price, imageUrl, id]);
        res.json(result.rows[0]);
    } catch (err) {
        next(err);
    }
};

export const deleteItem = async (req, res, next) => {
  try {
    const id = req.params.id;
    await pool.query(itemQueries.delete, [id]);
    res.json({ message: 'Item deleted' });
  } catch (err) {
    next(err);
  }
};