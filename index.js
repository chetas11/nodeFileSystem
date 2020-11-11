const express = require("express");
const app = express();
const fs  = require("fs");

const FileContent = Math.floor(Date.now() / 1000) // to store current time-stamp

let current_datetime = new Date()    
let FileName = current_datetime.getFullYear() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getDate() + "_" + current_datetime.getHours() + "-" + current_datetime.getMinutes() + "-" + current_datetime.getSeconds() 
//to store current date & time.

    app
    .get("/", (req,res) =>{                                     
            fs.appendFile(FileName+".txt", FileContent,()=>{       //create a new file and appends the time-stamp
                console.log("File Created!")
                res.send(`<h1>File Created</h1>`)
            })
    }).listen(process.env.PORT) 
