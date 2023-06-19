const button = document.getElementById('search');

const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
const month = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
const date = new Date();

document.getElementById('day').innerText = days[date.getDay()];
const span = document.getElementById("date");
const txt = document.createTextNode(date.getDate() + " "+ month[date.getMonth()]);
span.appendChild(txt);

let cityname;

const getTemp = async()=>{
    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=4d7d839ec0636ecfded395cf13148507`);
    const obj = await data.json();
    const arrData = [obj];
    
}

button.addEventListener('click',()=>{
    cityname = document.getElementById('searchbar').value;
    getTemp();

})