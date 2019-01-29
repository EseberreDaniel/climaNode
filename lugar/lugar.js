const axios = require('axios');

const getLugarLatitudLongitud = async(direccion) => {
    let encodedUrl = encodeURI(direccion);
    let respuesta = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}&key=AIzaSyAr1bpfWs8euihp0JPcXBnKHXCxpFdGJLk`);

    if (respuesta.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultados para esta busqueda`);
    }

    let location = respuesta.data.results[0];
    let coordenadas = location.geometry.location;

    return {
        direccion: location.formatted_address,
        latitud: coordenadas.lat,
        longitud: coordenadas.lng
    }
};


module.exports = {
    getLugarLatitudLongitud
}