const axios = require('axios');

const getClima = async (lat, lng) => {
    const resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=1c2a691dbbf8f6a3c5021339d92d454b&units=metric`);
    return resp.data.main;
}

module.exports = {
    getClima
}