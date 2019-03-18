const colors = require('colors');
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

// lugar.getLugarLatLng(argv.direccion).then(
//     console.log
// );

// clima.getClima(40.750000, -74.000000)
//     .then(console.log)
//     .catch(console.log);

const getInfo = async  (direccion) => {
    const location = await lugar.getLugarLatLng(direccion)
                    .then(resp => resp)
                    .catch(err => {
                        throw new Error("Error en la direccion!", err);
                    });
    const weather = await clima.getClima(location.lat, location.lng)
                        .then(resp => resp)
                        .catch(err => {
                            throw new Error("No se pudo obtener el clima!", err);
                        });
    console.log(`CLIMA EN ${location.direccion}`.inverse.green);
    console.log(`Clima: ${String(weather.temp).green} Cº`);
    console.log(`Humedad: ${String(weather.humidity).green}%`);
    console.log(`Temperatura mínima: ${String(weather.temp_min).green} Cº`);
    console.log(`Temperatura máxima: ${String(weather.temp_max).green} Cº`);

}

getInfo(argv.direccion);
