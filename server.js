const express = require("express");
const mysql = require("mysql");
const cors = require('cors');


const app = express();


// Pareses incoming requests with JSON payloads
app.use(express.json());
app.use(cors());

app.listen(3001,()=>{
    console.log('Listening')
})

const db = mysql.createConnection({
    user:"user",
    host:"localhost",
    password:"123",
    database:"LoginDB"
})

// Test Connection when starting server
db.connect((err)=>{
    if (err) throw err
    console.log('MySQL Connected')
});


// Create the user table in the database
/*
app.get('/createuser',(req,res)=>{
    let sql = "CREATE TABLE user(username VARCHAR(255), password VARCHAR(255), PRIMARY KEY (username) )"
    db.query(sql,(err,result)=>{
        if(err) throw err;
        console.log(result);
        res.send('table created')
    })
})
*/

// Register a user account
app.post('/register',(req,res)=>{

    const username = req.body.username
    const password = req.body.password

    // Inser the username and password into the database
    db.query("INSERT INTO users (username,password) VALUES(?,?)",[username,password],(err,result)=>{
        console.log(err);
        console.log(result);
    })

})

