#!/usr/bin/node
const req = require('request')

let moive_id = process.argv[2]
let URL = 'https://swapi-api.alx-tools.com/api/films/'+ moive_id
options = {
    'method' : 'GET',
    'url' : URL,
}

req(options, (err, res)=>{
    if(err) console.log(err)
    respond = JSON.parse(res.body)
    for(let i = 0; i< respond['characters'].length; i++)
    {
        options = {
            'method' : 'GET',
            'url' : respond['characters'][i],
        }
        req(options,(err,res)=>{
            if(err) console.log(err)
            jsonres = JSON.parse(res.body)
            console.log(jsonres['name'])
        })
    }
})