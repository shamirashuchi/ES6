//OpenWeather for weather api
const API_KEY = 'a02236c73f5a1637945a30d7b339698b';
const loadtemperature = city =>{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(res => res.json())
    .then(data =>  displaytempareture(data));
}

const displaytempareture = data =>{
    console.log(data);
    setinnertext('tempareture',data.main.temp);
    setinnertext('place',data.name);
    setinnertext('weather',data.weather[0].main);
}
const setinnertext = (id,text) =>{
    const weather = document.getElementById(id);
    weather.innerText = text;
}

document.getElementById('btn-search').addEventListener('click',function(){
    const searchfield = document.getElementById('search');
    const city = searchfield.value;
    loadtemperature(city);
})
loadtemperature('dhaka');