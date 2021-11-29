import express from "express";
import request from 'request';
import fs from 'fs'

var router = express.Router();

router.get('/', function(req, res, next) {    
    const keyValueJson = JSON.parse(fs.readFileSync(__dirname + "/keywords.json", 'utf8'));
    var fileName = ""
    for (var key in keyValueJson) {
        fileName = __dirname + keyValueJson[key]
        if (req.query.search === key) { break } 
    }

    request.post(
        {
            url:'http://localhost:3001/api',
            json: JSON.parse(fs.readFileSync(fileName, 'utf8')),
            headers: {
            'Content-Type': 'application/json'
            }
        },
        function(error, response, body){
            res.send(body);
        });
});

module.exports = router;