const axios = require('axios');

const getClima = async(latitud, longitud) => {
    let longitudEncoded = encodeURI(longitud);
    let latitudEncoded = encodeURI(latitud);
    let respuesta = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitudEncoded}&lon=${longitudEncoded}&units=metric&appid=32016cf80d6132977e98ed43297a9c2e`);

    let resultado = respuesta.data;
    return {
        temperatura: resultado.main.temp
    }
}


module.exports = {
    getClima
}