 require('dotenv').config();
const express = require('express')
const app =express()
const port = 3000

app.get('/' ,(req,res)=>{
    res.send('Welcome boss dwivedi')
})
app.get('/twitter',(req,res)=>{
    res.send('dwivedi007')
})

app.listen(process.env.PORT,()=>{
    console.log(`listening on port ${port}`)
})
app.get('/login',(req,res)=>
{
    res.send('<h1>please login boss</h1>')
})
// app.listen(port,()=>{
//     console.log(`listening on port ${port}`)
// })