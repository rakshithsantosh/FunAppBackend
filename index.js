require('dotenv').config()

const express = require('express')
const app = express()
//const port = 3000

app.get('/',(req,res)=>{
    res.send('hello world!')
})

app.get('/link',(req,res)=>{
    res.send('link')
})

app.get('/login',(req,res)=>{
    res.send('<h1>please login </h1>')
})

app.listen(process.env.PORT,()=>{
    console.log(`port is running on ${process.env.PORT}`)
})