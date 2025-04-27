const timeE1 = document.getElementById('time');
const dateE1 = document.getElementById('date');
const currentweatherItemsE1 = document.getElementById('current-weather-items');
const timezone = document.getElementById('time-zone');
const countryE1 = getElementById('country');
const weatherForecastE1 = document.getElementById('weather-forecast');
const current = document.getElementById('current-temp');

setInterval(() => {
    const time = new Date();
    const month = time.getMonth();
    const date = time.getDate();
    const day = time.getDay();
    const hour = time.getHours();
    const hoursIn12Hrsormat = hour >= 13 ? hour %12: hour
    const minutes = time.getMinutes();
    const ampm = hour >=12 ? 'PM' : 'AM'

    timeE1.innerHTML = hoursIn12Hrsormat + ':' + minutes + ' ' + `<span id="am-pm">${ampm}</span>`

}, 1000);