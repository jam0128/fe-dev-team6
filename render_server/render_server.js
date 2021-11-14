const express = require('express');
const app = express();
const ReactDOMServer = require("react-dom/server");
const port = 3001;

var request = require('request');

app.use(express.json()); 
app.post('/api', function(req, res) {
    console.log(req.body)
    var json = req.body
    for(key in json) {
        console.log(key + ": " + json[key])
    }
    
    res.send(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <title>React App</title>
      </head>
      <body>
        <div id="root">${req.body['test1Key']}</div>
        <div>hello from server side</div>
      </body>
    </html>
    `);
  })

// Connect 3001 port
app.listen(port, ()=>{
    console.log(`express is running on ${port}`);
})