import pool from "../config/db.js";
import { cartQueries } from "../models/queries.js";

export const getCart = async (req, res, next) => {
    try {
        const userId = req.user.userId;
        const result = await pool.query(cartQueries.getCart, [userId]);
        res.json(result.rows);
    } catch(err) {
        next(err);
    }
};

export const addCart = async (req, res, next) => {
    try {
        const userId = req.user.userId;
        const { itemId, quantity } = req.body;
        const result = await pool.query(cartQueries.addToCart, [userId, itemId, quantity]);
        res.status(201).json(result.rows[0]);
    } catch(err) {
        next(err);
    }
};

export const updateCartItem = async (req, res, next) => {
  try {
    const userId = req.user.userId;
    const { id } = req.params;
    const { quantity } = req.body;
    const result = await pool.query(cartQueries.updateQuantity, [quantity, id, userId]);
    res.json(result.rows[0]);
  } catch (err) {
    next(err);
  }
};

export const deleteCartItem = async (req, res, next) => {
  try {
    const userId = req.user.userId;
    const { id } = req.params;
    await pool.query(cartQueries.deleteItem, [id, userId]);
    res.json({ message: 'Item removed from cart' });
  } catch (err) {
    next(err);
  }
};