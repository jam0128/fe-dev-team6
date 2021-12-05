import express from "express";
import cors from 'cors'

const app = express();
var config = require('../config.json')
const port = config.web_port;

const renderRouter = require('./routes/render');

app.use(express.json()); 
app.use(cors());

app.use('/', renderRouter);

app.listen(port, () => {
    console.log(`express is running on ${port}`);
})