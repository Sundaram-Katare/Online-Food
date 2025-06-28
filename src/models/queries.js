export const queries = {
    createUser: `INSERT INTO users (name, email, password, role) VALUES ($1, $2, $3, $4) RETURNING *`,
    findUserByEmail: `SELECT * FROM users WHERE email = $1`,
}

export const itemQueries = {
    getAll: `SELECT * FROM items`,
    getById: `SELECT * FROM items WHERE id = $1`,
    add: `INSERT INTO items (name, price, image_url) VALUES ($1, $2, $3) RETURNING *`,
    update: `UPDATE items SET name = $1, price=$2, image_url=$3 WHERE id = $4 RETURNING *`,
    delete: `DELETE FROM items WHERE id=$1`,
};

export const cartQueries = {
    getCart: `SELECT c.id, i.name, i.price, i.image_url, c.quantity
          FROM cart_items c
          JOIN items i ON c.item_id = i.id
          WHERE c.user_id = $1`,

    addToCart: `INSERT INTO cart_items (user_id, item_id, quantity)
                VALUES ($1, $2, $3)
                ON CONFLICT (user_id, item_id)
                DO UPDATE SET quantity = cart_items.quantity + $3
                RETURNING *`,


    updateQuantity: `UPDATE cart_items
                   SET quantity = $1
                   WHERE id = $2 AND user_id = $3
                   RETURNING *`,

    deleteItem: `DELETE FROM cart_items WHERE id = $1 AND user_id = $2`
};