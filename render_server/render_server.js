import express from "express";

const app = express();
const port = 3001;

const indexRouter = require('./routes/index');

app.use(express.json()); 

app.use('/api', indexRouter)

app.listen(port, ()=>{
  console.log(`express is running on ${port}`);
})