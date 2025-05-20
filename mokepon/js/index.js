const express = require('express');
const cors = require("cors");
const app = express();
const jugadores = [];

app.use(cors()); // Agrega esta línea para habilitar CORS en todas las rutas
app.use(express.json());


class Mokepon {
    constructor(nombre) {
        this.nombre = nombre
    }
}
class Jugador {
    constructor(id) {
        this.id = id;
    }
    asignarMokepon(mokepon) {
        this.mokepon = mokepon
    }
}

app.get('/unirse', (req, res) => {
    const id = Math.random(); // Quitamos la interpolación
    const jugador = new Jugador(id); // Usamos la clase correctamente
    jugadores.push(jugador);
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.send(id.toString()); // Enviar el ID correctamente
    //res.send('id')
});

app.post("/mokepon/:jugadorid", (req, res) => {
    const jugadorId = req.params.jugadorId || ""
    const nombre = req.body.mokepon || ""
    const mokepon = new Mokepon(nombre)
    const jugadorIndex = jugadores.findIndex((jugadorId) => jugadorId === jugadorId)
    if (jugadorIndex >= 0) {
        jugadores[jugadorIndex].asignarMokepon(mokepon)
    }

    console.log(jugadores)
    console.log(jugadorId)
    //res.end()
    res.end();
})



/* app.get('/', (req, res) => {
    res.send('Hola mundo');
}) */

app.listen(8080, () => {
    console.log('Servidor corriendo en el puerto 8080');
});
