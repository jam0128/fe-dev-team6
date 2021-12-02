import express from "express";

const app = express();
var config = require('../config.json')
const port = config.reder_port;

const indexRouter = require('./routes/index');

app.use(express.json()); 

app.use('/api', indexRouter)

app.listen(port, ()=>{
  console.log(`express is running on ${port}`);
})