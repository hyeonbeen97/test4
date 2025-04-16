const express = require('express');
const app = express();
const mysql = require('mysql2');
const cors = require('cors');
require('dotenv').config();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

db.connect((err) => {
    if (err) {
        console.error("db 연결 실패", err);
    } else {
        console.log("db 연결 성공");
    }
});

app.get('/guest', (req, res) => { 
    db.query("SELECT * FROM guest ORDER BY created_at DESC", (err, results) => { 
        res.json(results);
    })
})

app.post('/guest', (req, res) => { 
    const { name, message } = req.body;
    db.query("INSERT INTO guest(name, message) VALUES (?,?)", [name, message], (err) => { 
        if (err) return res.status(500).send(err);
    });
})

app.listen(8080, () => { 
    console.log("8080포트에 연결")
})