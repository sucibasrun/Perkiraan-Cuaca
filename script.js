const timeE1 = document.getElementById('time');
const dateE1 = document.getElementById('date');
const currentweatherItemsE1 = document.getElementById('current-weather-items');
const timezone = document.getElementById('time-zone');
const countryE1 = document.getElementById('country');
const weatherForecastE1 = document.getElementById('weather-forecast');
const current = document.getElementById('current-temp');


const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const API_KEY ='26ad57d95adf2a5715f463b8cdd9ab66'

setInterval(() => {
    const time = new Date();
    const month = time.getMonth();
    const date = time.getDate();
    const day = time.getDay();
    const hour = time.getHours();
    const hoursIn12Hrsormat = hour >= 13 ? hour %12: hour
    const minutes = time.getMinutes();
    const ampm = hour >=12 ? 'PM' : 'AM'

    timeE1.innerHTML = `${hoursIn12Hrsormat}:${minutes}<span id="am-pm">${ampm}</span>`;

    dateE1.innerHTML = `${days[day]}, ${date} ${months[month]}`;

}, 1000);

getWeatherData()
function getWeatherData () {
    navigator.geolocation.getCurrentPosition((success) => {
        
        let {latitude, longitude}= success.coords;

        fetch(`https://api.openweathermap.org/data/3.0/onecall?lat={lat}=${latitude}&lon=${longitude}&exclude=hourly,minute1y&units{part}&appid=${API_KEY}`).then(res => res.json()).then(data => {}

        )
    console.log(data);
    showWeatherData(data);
    })
}

function showWeatherData (data){
    let {humidity, pressure, sunrise, sunset, wind_speed} = data.current;

}