export const queries = {
    createUser: `INSERT INTO users (name, email, password, role) VALUES ($1, $2, $3, $4) RETURNING *`,
    findUserByEmail: `SELECT * FROM users WHERE email = $1`,
}