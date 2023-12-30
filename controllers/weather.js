const axios = require('axios');

const apiKey = 'd16785159270c1f96141537f606e54da';

async function getWeather(res,req) {
    try {
        const apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=42.01&lon=-74.38&appid=${apiKey}`;
        const response = await axios.get(apiUrl);
        const weatherData = response.data;
        res.render('trails/weather', { weather: weatherData });
    } catch (err) {
        res.render('errors/errorPage', { errorMsg: err.message });
    }
};



module.exports ={
    getWeather
}