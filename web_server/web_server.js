import express from "express";
import cors from 'cors';
import path from "path";

const app = express();
var config = require('../config.json')
const port = config.web_port;

const renderRouter = require('./routes/render');

app.use(express.json()); 
app.use(cors());
app.use("/static", express.static(path.resolve(__dirname,"../render_server/public")));


app.use('/', renderRouter);

app.listen(port, () => {
    console.log(`express is running on ${port}`);
})