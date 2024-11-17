// Import required modules
const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
//const fs = require("fs");
//const path = require("path");
//const OpenAI = require("openai");
//const bodyParser = require("body-parser");
//const dotenv = require("dotenv");

// Create an Express app
const app = express();
app.use(cors());
app.use(express.json());
const port = process.env.PORT || 5030;
//app.use(bodyParser.json());
//dotenv.config(); 

//console.log(process.env.OPEN_AI_API_KEY);

/*
const openai = new OpenAI({apiKey: process.env.OPEN_AI_API_KEY});

const speechFile = path.resolve("./speech.mp3");

async function main(res, text) {
  const mp3 = await openai.audio.speech.create({
    model: "tts-1",
    voice: "alloy",
    input: text,
  });
  console.log(speechFile);
  const buffer = Buffer.from(await mp3.arrayBuffer());
  await fs.promises.writeFile(speechFile, buffer);
  res.send(buffer);
}
*/

// Create a MySQL connection
const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',  // replace with your MySQL username
  password: 'Arjun@123',  // replace with your MySQL password
  database: 'Lord_Vishnu'  // replace with your database name
});

app.get("/tts", (req, res) => {
  try{
  main(res, "Hello world, I am ai generated sound");
}catch(error){
  console.log(error);
}

})

// Connect to MySQL
con.connect(function(err) {
  if (err) {
    console.error('Error connecting to MySQL:', err.stack);
    return;
  }
  console.log('Connected to MySQL as id ' + con.threadId);
});

app.get('/getTemples', (req, res) => {
  const query = `SELECT id, title, content, image_source FROM temples`;  // replace 'temples' with your table name

  con.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching data from MySQL:', err.stack);
      return res.status(500).json({ error: 'Database query failed' });
    }
    res.json(results);  // Send the results as a JSON response
  });
})

app.get('/templedetails/:name', (req, res) => {
  const query = `SELECT temple_details FROM temples WHERE title='${req.params.name}' `;  // replace 'temples' with your table name

  con.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching data from MySQL:', err.stack);
      return res.status(500).json({ error: 'Database query failed' });
    }
    res.json(results);  // Send the results as a JSON response
  });
});

// Get glosary
app.get('/:title/getGlosary', (req, res) => {
  const query = `SELECT title FROM ${req.params.title} `;  // replace 'temples' with your table name
  con.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching data from MySQL:', err.stack);
      return res.status(500).json({ error: 'Database query failed' });
    }
    res.json(results);  // Send the results as a JSON response
  });
})

// Get content
app.get('/:title/getnewcontent/:index', (req, res) => {
  const query = `SELECT content FROM ${req.params.title} WHERE id=${req.params.index} `;  // replace 'temples' with your table name
  con.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching data from MySQL:', err.stack);
      return res.status(500).json({ error: 'Database query failed' });
    }
    res.json(results);  // Send the results as a JSON response
  });
})

app.get('/getSongs', (req, res) => {
  const query = `SELECT name, artist, audio, id, active FROM songs`;  // replace 'temples' with your table name

  con.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching data from MySQL:', err.stack);
      return res.status(500).json({ error: 'Database query failed' });
    }
    res.json(results);  // Send the results as a JSON response
  });
})

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
