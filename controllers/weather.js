const axios = require('axios');

const apiKey = 'd16785159270c1f96141537f606e54da';

async function getWeather(req,res) {
    try {
        const apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=42.01&lon=-74.38&units=imperial&exclude=hourly,daily&appid=${apiKey}`;
        const response = await axios.get(apiUrl);
        const weatherData = response.data;
        const mapTilesUrl = `https://tile.openweathermap.org/map/temp_new/3/1/1.png?appid=${apiKey}`
        console.log(mapTilesUrl);
        res.render('trails/weather', { weatherData, mapTilesUrl });
     } catch (err) {
         res.render('errors/errorPage', { errorMsg: err.message });
     }
};



module.exports ={
    getWeather
}