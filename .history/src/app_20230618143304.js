const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// const staticPath = path.join(__dirname,'../public');

// app.use(express.static(staticPath));

app.set('view engine','hbs');

app.get('/',(req,res)=>{
    res.render('index');
})

app.get('/about',(req,res)=>{
    res.render('about');
})
app.get('/weather',(req,res)=>{
    res.render('weather');
})
app.get('*',(req,res)=>{
    res.render('404error');
})

app.listen(port,()=>{
    console.log(`Listening at port ${port}`);
})