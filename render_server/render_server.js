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
    
    const Header = require('./component/Header');

    var result = `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <title>React App</title>
        </head>
        <body>
        <div> 네이버 </div> N
    `

    result += ReactDOMServer.renderToString(Header.Header(req.body['test1Key']));

    result += `
        <div id="root">${req.body['test1Key']}</div>
        <div>hello from server side</div>
      </body>
    </html>
    `;

    res.send(result);

     })

// Connect 3001 port
app.listen(port, ()=>{
    console.log(`express is running on ${port}`);
})