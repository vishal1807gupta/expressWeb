const button = document.getElementById('search');

let cityname;

const getTemp = async()=>{
    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=4d7d839ec0636ecfded395cf13148507`);
    const obj = await data.json();
    const arrData = [obj];
    console.log(arrData[0]);
}

button.addEventListener('click',()=>{
    cityname = document.getElementById('searchbar').value;
    getTemp();

})