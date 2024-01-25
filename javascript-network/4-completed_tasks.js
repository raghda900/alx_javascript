#!/usr/bin/node
const request = require('request')
const fs = require('fs')

let URL = process.argv[2]
options = {
    'method' : 'GET',
    'url' : URL,

}
let tasksCompleted = {}

request(options, (err, res)=>{
    if(err) console.log(err)
    record = JSON.parse(res.body)
    for(let i = 0; i<record.length;i++){
        if(record[i]['completed'] ){
                if(record[i]['userId'] in tasksCompleted){
                    tasksCompleted[record[i]['userId']]+=1
                }else{
                    tasksCompleted[record[i]['userId']]=1
                }
        }
    }
    console.log(tasksCompleted)
})