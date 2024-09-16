require('dotenv').config()
const express=require('express')
const app=express();
const port=process.env.PORT

app.get('/',(req,res)=>{
    res.send("Wellcome To Home Page")
})

app.get('/login',(req,res)=>{
    res.send("Wellcome to Login Page")
})

app.get('/signup',(req,res)=>{
    res.send("Wellcome to Signup page")
})

// app.get('/github',(req,res)=>{
//     res.
// })

app.listen(port,()=>{
    console.log(`Example app listening port ${port}`)
})