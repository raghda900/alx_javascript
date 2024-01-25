#!/usr/bin/node
const req = require('request')
const fs = require('fs')

let URL = process.argv[2]
let bodydestination = process.argv[3]
options = {
    'method' : 'GET',
    'url' : URL,
    'encoding' : 'utf-8'
}

req(options,(err,res) =>{
    fs.writeFile(bodydestination, res.body, (err) => {
        if (err) throw err;
    })
})
    