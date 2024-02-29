const http = require('http');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require("path");
mongoose.set('strictQuery', true);
require('dotenv').config();

const app = express();


app.use(cors());
app.use(express.json());

app.use('/api/v1', require('./api/Authentication/auth'));
app.use('/api/v1', require('./api/Route/getdata.route'));
app.use('/api/v1/user', require('./api/Route/user.route'));
app.use('/api/v1/institute', require('./api/Route/institute.route'));
app.use('/api/v1/class', require('./api/Route/class.route'));
app.use('/api/v1/book', require('./api/Route/book.route'));

const db = mongoose.connect("mongodb+srv://criticalgaming2611:Nidit1234@cluster.oim24lc.mongodb.net/").then(() => console.log("db connected")).catch((e) => console.log(e));
// app.listen(8080, () => console.log("server connected"));
const appServer = http.createServer(app);
appServer.listen(8080)



app.use(express.static(path.join(__dirname, "../Educational-Frontend/build")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../Educational-Frontend/build/index.html"));
});
