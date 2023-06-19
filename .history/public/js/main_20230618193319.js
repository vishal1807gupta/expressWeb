const button = document.getElementById('search');

const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
const month = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
const date = new Date();

const day = document.getElementById('day');
day.innerText = days[date.getDay()];
const span = document.createElement('span');
span.innerText = date.getDate() + " " + month[date.getMonth()];
day.appendChild(span);


let cityname;

const getTemp = async()=>{
    if(cityname.trim().length==0){
        document.getElementById('info').innerText = 'Please type cityname before searching';
        document.getElementById('temp').innerHTML = '';
    }
    else{
        try {
            const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=4d7d839ec0636ecfded395cf13148507`);
            const obj = await data.json();
            const arrData = [obj];
            if(arrData[0].cod==404){
                document.getElementById('info').innerText = 'Enter valid city name';
                document.getElementById('temp').innerHTML = '';
                return;
            }
            document.getElementById('temp').innerHTML = `${(arrData[0].main.temp-273).toFixed(2)}<sup>o</sup>C`;
            document.getElementById('info').innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;

        } catch (error) {
            console.log(error);
        }
    }
    
}

button.addEventListener('click',()=>{
    cityname = document.getElementById('searchbar').value;
    getTemp();

})