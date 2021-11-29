import express from "express";
import axios from 'axios'
import fs from 'fs'

var router = express.Router();

router.get('/', function(req, res, next) {    
    const keyValueJson = JSON.parse(fs.readFileSync(__dirname + "/keywords.json", 'utf8'));
    var fileName = ""
    for (var key in keyValueJson) {
        fileName = __dirname + keyValueJson[key]
        if (req.query.search === key) { break } 
    }
    axios.post(
        'http://localhost:3001/api', 
        JSON.parse(fs.readFileSync(fileName, 'utf8')), {
            headers: {
                'Content-Type': 'application/json'
            }
        }
    ).then((r) => {
        res.send(r.data);
    })
    .catch(function (error) {
        console.log(error);
    });
});

module.exports = router;