const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad a obtener el clima',
        demand: true
    }
}).argv;



let getInformacion = async(direccion) => {
    try {
        let coordenadas = await lugar.getLugarLatitudLongitud(direccion);
        let temperatura = await clima.getClima(coordenadas.latitud, coordenadas.longitud);
        return `El clima en ${coordenadas.direccion} es de ${temperatura} grados centigrados`;
    } catch (e) {
        return `No se pudo determinar el clima`;
    }
}
getInformacion(argv.direccion).then(respue => console.log(respue)).catch(error => console.log(error));

/*lugar.getLugarLatitudLongitud(argv.direccion)
    .then(respuesta => {
        console.log(respuesta);
        clima.getClima(respuesta.latitud, respuesta.longitud).then(respue => {
            console.log(`Temperatura : ${respue.temperatura} grados centigrados`);
        })
    })
    .catch(error => console.log(error));*/