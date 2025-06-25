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