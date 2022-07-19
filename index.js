import express from "express";
import createFeed from "./src/Feed/controller.js";
import bodyParser from "body-parser";
import mysql from "mysql";
import 'dotenv/config'
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const jsonParser = bodyParser.json()
const app = express()
console.log(process.env.DB_USER)
app.use("/videos", express.static(__dirname + "/videos"))
app.use("/sub", express.static(__dirname + "/sub"))


// app.post('/create-feed',jsonParser, function (req, res) { 
//   createFeed(req, res)
//  })

//  app.get('/createDB',jsonParser, function (req, res) { 
//   var con = mysql.createConnection({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     // password: process.env.DB_PASSWORD
//   });
//   con.connect(function(err) {
//     if (err) throw err;
//     con.query("CREATE DATABASE feed", function (err, result) {
//       if (err) throw err;
//       console.log("Database created");
//     });
//   });
//  })

//  app.get('/createTableFeed',jsonParser, function (req, res) { 
//   var con = mysql.createConnection({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database:process.env.DB,
//     path : '/quote/random', // the rest of the url with parameters if needed
//     method : 'GET'
//   });
//   con.connect(function(err) {
//     if (err) throw err;
//     con.query("CREATE DATABASE feed", function (err, result) {
//       if (err) throw err;
//       console.log("Database created");
//     });
//   });
//  })

// app.post('/create-feed',jsonParser, function (req, res) { 
//   createFeed(req, res,__dirname)
//  })

app.get('/feed',jsonParser, function (req, res) { 
  createFeed(req, res)
 })

app.get('/',jsonParser, function (req, res) { 
  res.send("hello") 
 })



app.listen(process.env.PORT||3000)