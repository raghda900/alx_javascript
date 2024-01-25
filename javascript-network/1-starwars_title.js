#!/usr/bin/node
const request = require('request');

moive_id = process.argv[2]

options = {
    'method': 'GET',
    'url' : 'https://swapi-api.alx-tools.com/api/films/'+ moive_id

}

request.get(options,(err,res)=>{
    if (err) console.log(err)

    jsonres = JSON.parse(res.body)
	console.log(jsonres['title']);
});

// ANOTHER WAY
/*request.get('https://swapi-api.alx-tools.com/api/films/1', {encoding : 'utf-8'} )
        .on('data', data => {
            jsonres = JSON.parse(data)
            console.log(jsonres['title'])
        }) */