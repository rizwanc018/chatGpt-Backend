import express from "express";
import bodyParser from 'body-parser';
import { promptAi, promptDALLE } from "./helpers.js";

const app = express()
app.use(bodyParser.json())
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Header", "Origin, X-Requested-With, Content-Type, Accept")
    next()
})

app.listen(4000, ()=>{
    console.log("Listening on port 4000")
})

app.post('/gpt', async(req, res) => {
    let prompt = req.body.prompt
    let response = await promptAi(prompt)
    res.send(response)
})

app.post('/dalle', async(req, res) => {
    let prompt = req.body.prompt
    let response = await promptDALLE(prompt)
    res.send(response)
})