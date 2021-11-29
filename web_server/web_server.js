import express from "express";
import cors from 'cors'

const app = express();
const port = 3000;

const renderRouter = require('./routes/render');

app.use(express.json()); 
app.use(cors());

app.use('/', renderRouter);
// For Access-Control-Allow-Origin error handle

// Connect 3001 port
app.listen(port, () => {
    console.log(`express is running on ${port}`);
})