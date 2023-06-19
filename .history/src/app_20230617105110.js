const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/',(req,res)=>{
    res.send("Hello World");
})

app.get('/about',(req,res)=>{
    res.send("It's about page");
})
app.get('/weather',(req,res)=>{
    res.send("It's weather page");
})
app.get('*',(req,res)=>{
    res.send("Oops! 404 error not found");
})

app.listen(port,()=>{
    console.log(`Listening at port ${port}`);
})