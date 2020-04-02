const express = require('express');
const pg = require('pg');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');


// Setup
app.use(cors());
app.use(bodyParser.json());


// db
const pool = new pg.Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME || "db",
    password: process.env.DB_PASS,
    port: process.env.DB_PORT || 5432,
});

global.db = pool;


// Routes
app.use("/api", require('./routes'));


// Listen
const PORT = 4000;

const server = app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});

function close() {
  pool.end();
  server.close();
}

module.exports = {
  app,
  close
};
