import express from "express";
import axios from 'axios'
import fs from 'fs'

var router = express.Router();

var config = require('../../config.json')

router.get('/', function(req, res, next) {    
    const keyValueJson = JSON.parse(fs.readFileSync(__dirname + config.keyword_file, config.encoding_format));
    var fileName = ""
    for (var key in keyValueJson) {
        fileName = __dirname + keyValueJson[key]
        if (req.query.search === key) { break } 
    }
    axios.post(
        config.base_url + ":" + config.reder_port + '/api', 
        JSON.parse(fs.readFileSync(fileName, config.encoding_format)), {
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