const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

const staticPath = path.join(__dirname,'../public');

app.use(express.static(staticPath));

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