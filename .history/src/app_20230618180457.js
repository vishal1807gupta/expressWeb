const express = require('express');
const path = require('path');
const hbs = require('hbs');
const app = express();
const port = process.env.PORT || 3000;

const imagePath = path.join(__dirname,'../public/images');
const cssPath = path.join(__dirname,'../public/css');
const jsPath = path.join(__dirname,'../public/js');
const templatePath = path.join(__dirname,'../templates/views');
const partialPath = path.join(__dirname,'../templates/partials');
// const staticPath = path.join(__dirname,'../public');

app.use('/images',express.static(imagePath));
app.use('/css',express.static(cssPath));
app.use('/js',express.static(jsPath));
// app.use(express.static(staticPath));

app.set('view engine','hbs');
app.set('views',templatePath);
hbs.registerPartials(partialPath);

app.get('/',(req,res)=>{
    res.render('index',{
        title : "Home page"
    });
})

app.get('/about',(req,res)=>{
    res.render('about',{
        title : "About page"
    });
})
app.get('/weather',(req,res)=>{
    res.render('weather');
})
app.get('*',(req,res)=>{
    res.render('404error',{
        title : "Error page"
    });
})

app.listen(port,()=>{
    console.log(`Listening at port ${port}`);
})