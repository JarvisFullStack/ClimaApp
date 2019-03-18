const axios = require('axios');


const getLugarLatLng = async (dir) => {
    const encodedUrl = encodeURI(dir);
    const instance = axios.create({
        baseURL: 'https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location='+encodedUrl,
        headers: {
            'X-RapidAPI-Key': '265d4beb1dmsh89ebf0079b75903p1e433ajsn851a396eb457'
        }
    });
    
    const resp = await instance.get();
    if(resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para la direccion '${direccion}'`);
    }  
    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;
    return {
        direccion,
        lat, 
        lng
    }
}


module.exports = {
    getLugarLatLng
}
