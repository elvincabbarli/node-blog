import mysql from "mysql"

export const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'elvin123',
    database: 'blog'
})