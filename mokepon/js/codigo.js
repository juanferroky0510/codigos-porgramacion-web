//agregamos eventos a los botones
let botonMascotaJugador = document.getElementById("btnSeleccionarMascota");
botonMascotaJugador.addEventListener("click", iniciarJuego);
let btnFuego = document.getElementById("btnFuego")
btnFuego.addEventListener("click", selecAtaqueJugador)
let btnAgua = document.getElementById("btnAgua")
btnAgua.addEventListener("click", selecAtaqueJugador)
let btnTierra = document.getElementById("btnTierra")
btnTierra.addEventListener("click", selecAtaqueJugador)
let btnReiniciar = document.getElementById("btnReiniciar")
btnReiniciar.addEventListener("click", reiniciarJuego)
let divRadioMascota = document.querySelectorAll(".divRadioMascota");
// Asigna un evento a cada uno
divRadioMascota.forEach(elemento => {
    elemento.addEventListener("click", mostrarMascota);
});


//definimos variables para su proxima manipulacion
let ataqueEnemigo = ""
let ataqueJugador = ""

let vidasJugador = 0
let vidasEnemigo = 0

let jugadorId = null;

//obtenemos elementos por su ID para su posterior manipulacion
let secSeleccionarMascota = document.getElementById("secSeleccionarMascota")
let secSeleccionarAtaque = document.getElementById("secSeleccionarAtaque")
let secMensajes = document.getElementById("secMensajes")
let secReiniciar = document.getElementById("secReiniciar")


function mostrarMascota() {
    let id = this.id
    // Cargamos un sonido
    let sonido = new Audio("./audio/sonidoElegir.mp3");
    let divImgMascota = document.getElementById("divImgMascota")
    if (id == "hipodoge") {
        // reproducimos el sonido
        sonido.play();
        divImgMascota.innerHTML = '<img src="./imagenes/hipodoge.png" alt="Hipodoge">'
    } else if (id == "capipepo") {
        // reproducimos el sonido
        sonido.play();
        divImgMascota.innerHTML = '<img src="./imagenes/capipepo.png" alt="Capipepo">'
    } else if (id == "ratigueya") {
        // reproducimos el sonido
        sonido.play();
        divImgMascota.innerHTML = '<img src="./imagenes/ratigueya.png" alt="Ratigueya">'
    }
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function iniciarJuego() {
    //para empezar el juego, primero verificamos con que mascota va a jugar el jugador
    //retorna true si el jugador eligio correctamente a una mascota
    unirseAlJuego()
    if (seleccionarMascotaJugador()) {
        //ahora seleccionamos la mascota al enemigo de manera aleatoria
        seleccionarMascotaEnemigo();
        //ocultamos la seccion de seleccionar mascota
        secSeleccionarMascota.style.display = "none"
        //mostramos la seccion de selecionar ataque y mensajes
        secSeleccionarAtaque.style.display = "block"
        secMensajes.style.display = "block"
        //unirseAlJuego()
    }
}

function unirseAlJuego() {
    //fetch("localhost:8080/unirse")
    fetch("http://localhost:8080/unirse")
        .then(function (res) {
            //console.log(res)
            if (res.ok) {
                res.text()
                    .then(function (respuesta) {
                        console.log(respuesta)
                        jugadorId = respuesta
                    })
            }
        })
}

function seleccionarMascotaJugador() {
    //obtenemos elementos radioButton
    let inputHipodoge = document.getElementById("hipodoge");
    let inputCapipepo = document.getElementById("capipepo");
    let inputRatigueya = document.getElementById("ratigueya");
    //obtenemos el elemento parrafo donde colocaremos el nombre y vidas de la mascota del jugador
    let mascotaJugador = document.getElementById("mascotaJugador");
    let mascotaID = ""
    //obtenemos el elemento imagen donde colocaremos la imagen dependiendo la mascota
    let imgMascotaJugador = document.getElementById("imgMascotaJugador")
    //inicializamos las vidas de la mascota del jugador a 3
    vidasJugador = 3
    //validamos que mascota se selecciono y colocamos sus vidas
    if (inputHipodoge.checked) {
        mascotaID = inputHipodoge.id
        mascotaJugador.innerHTML = 'Jugador: Hipodoge tiene <span id="vidasJugador">' + vidasJugador + '</span> vidas';
        imgMascotaJugador.src = './imagenes/' + inputHipodoge.id + '.png'; // URL de la imagen
        imgMascotaJugador.alt = inputHipodoge.id; // Texto alternativo
        seleccionarmokepon(mascotaID)
        return true
    } else if (inputCapipepo.checked) {
        mascotaID = inputCapipepo.id
        mascotaJugador.innerHTML = 'Jugador: Capipepo tiene <span id="vidasJugador">' + vidasJugador + '</span> vidas';
        imgMascotaJugador.src = './imagenes/' + inputCapipepo.id + '.png'; // URL de la imagen
        imgMascotaJugador.alt = inputCapipepo.id; // Texto alternativo
        seleccionarmokepon(mascotaID)
        return true
    } else if (inputRatigueya.checked) {
        mascotaID = inputRatigueya
        mascotaJugador.innerHTML = 'Jugador: Ratigueya tiene <span id="vidasJugador">' + vidasJugador + '</span> vidas';
        imgMascotaJugador.src = './imagenes/' + inputRatigueya.id + '.png'; // URL de la imagen
        imgMascotaJugador.alt = inputRatigueya.id; // Texto alternativo
        seleccionarmokepon(mascotaID)
        return true
    } else {
        alert("Por favor,selecciona una mascota");
        return false
    }
}

function seleccionarmokepon(nombreMascota) {
    fetch(`http://localhost:8080/mokepon/${jugadorId}`, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            mokepon: nombreMascota
        })
    })
}

function seleccionarMascotaEnemigo() {
    //obtenemos un numero aleatorio entre 1 y 3 para agregar una mascota al enemigo
    let mascotaAleatoria = aleatorio(1, 3);
    //obtenemos el elemento parrafo donde colocaremos el nombre y vidas de la mascota del enemigo
    let mascotaEnemigo = document.getElementById("mascotaEnemigo");
    //obtenemos el elemento imagen donde colocaremos la imagen dependiendo la mascota
    let imgMascotaEnemigo = document.getElementById("imgMascotaEnemigo")
    //inicializamos las vidas de la mascota del enemigo a 3
    vidasEnemigo = 3
    //validamos que mascota se eligio de manera aleatoria y colocamos su nombre y vidas
    if (mascotaAleatoria == 1) {
        mascotaEnemigo.innerHTML = 'Enemigo: Hipodoge tiene <span id="vidasEnemigo">' + vidasEnemigo + '</span> vidas';
        imgMascotaEnemigo.src = './imagenes/hipodoge.png'; // URL de la imagen
        imgMascotaEnemigo.alt = "hipodoge"; // Texto alternativo
    } else if (mascotaAleatoria == 2) {
        mascotaEnemigo.innerHTML = 'Enemigo: Capipepo tiene <span id="vidasEnemigo">' + vidasEnemigo + '</span> vidas';
        imgMascotaEnemigo.src = './imagenes/capipepo.png'; // URL de la imagen
        imgMascotaEnemigo.alt = "capipepo"; // Texto alternativo
    } else if (mascotaAleatoria == 3) {
        mascotaEnemigo.innerHTML = 'Enemigo: Ratigueya tiene <span id="vidasEnemigo">' + vidasEnemigo + '</span> vidas';
        imgMascotaEnemigo.src = './imagenes/ratigueya.png'; // URL de la imagen
        imgMascotaEnemigo.alt = "ratigueya"; // Texto alternativo
    } else {
        alert("Por favor,selecciona una mascota");
    }

}

function mensajeAtaque() {
    //obtenemos el div donde colocaremos los mensajes
    let divMensajes = document.getElementById('divMensajes')
    //vaciamos el div donde se imprime el mensaje
    divMensajes.innerHTML = ""
    //creamos un elemento parrafo (p)
    let parrafo = document.createElement('p')
    //definimos el texto de el elemento creado, que sera el ataque del jugador y del enemigo
    parrafo.innerHTML = 'Tu mascota atacó ' + ataqueJugador + ', la mascota del enemigo atacó con ' + ataqueEnemigo
    //agregamos el elemento al padre, osea al div
    divMensajes.appendChild(parrafo)
    //mandamos a llamar la funcion combate
    combate()
}

function mensajeQuienGano(mensaje) {
    //obtenemos el div donde colocaremos los mensajes
    let divMensajes = document.getElementById('divMensajes')
    //creamos un elemento parrafo (p)
    let parrafo = document.createElement('p')
    //agregamos al elemento creado como texto el mensaje que recibio la funcion como parametro
    parrafo.innerHTML = mensaje
    //agregamos el elemento al padre, osea al div
    divMensajes.appendChild(parrafo)
}

function mensajeFinal(mensaje) {
    //obtenemos el div donde colocaremos los mensajes
    let divMensajes = document.getElementById('divMensajes')
    //creamos un elemento parrafo (p)
    let parrafo = document.createElement('p')
    //agregamos al elemento creado como texto el mensaje que recibio la funcion como parametro
    parrafo.innerHTML = mensaje
    //agregamos el elemento al padre, osea al div
    divMensajes.appendChild(parrafo)
    //desactivamos los botones de ataque
    btnAgua.disabled = true
    btnFuego.disabled = true
    btnTierra.disabled = true
    //valido quien gano para mostrar una imagen
    if (mensaje == "Felicitaciones, GANASTE") {
        /* let imagen = document.createElement("img")
        // Configurar atributos de la imagen
        imagen.src = "./imagenes/gifVictoria.gif"; // URL de la imagen
        imagen.alt = "Pikachu bailando"; // Texto alternativo
        divMensajes.appendChild(imagen) */
        // Cargamos un sonido
        let sonido = new Audio("./audio/sonidoVictoria.mp3");
        // reproducimos el sonido
        sonido.play();

    } else {
        /* let imagen = document.createElement("img")
         // Configurar atributos de la imagen
        imagen.src = "./imagenes/gifDerrota.gif"; // URL de la imagen
        imagen.alt = "Pikachu triste"; // Texto alternativo
        divMensajes.appendChild(imagen) */
        // Cargamos un sonido
        let sonido = new Audio("./audio/sonidoDerrota.mp3");
        // reproducimos el sonido
        sonido.play();
    }
    //mostramos la seccion para reiniciar el juego
    secReiniciar.style.display = "block"
}

function selecAtaqueJugador() {
    //obtenemos el ID del elemento que pudo llamar esta funcion
    let idAtaqueJugador = this.id
    //dependiendo del ID, validamos que mascota eligio el jugador
    if (idAtaqueJugador == "btnFuego") {
        ataqueJugador = "FUEGO"
    } else if (idAtaqueJugador == "btnAgua") {
        ataqueJugador = "AGUA"
    } else if (idAtaqueJugador == "btnTierra") {
        ataqueJugador = "TIERRA"
    }
    //mandamos a llamar la funcion ataqueAleatorioEnemigo
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo() {
    //obtenemos un numero aleatorio entre 1 y 3
    let ataqueAleatorio = aleatorio(1, 3)
    //dependiendo del valor aleatorio, es el ataque del enemigo
    if (ataqueAleatorio == 1) {
        ataqueEnemigo = 'FUEGO'
    } else if (ataqueAleatorio == 2) {
        ataqueEnemigo = 'AGUA'
    } else if (ataqueAleatorio == 3) {
        ataqueEnemigo = 'TIERRA'
    }
    //mandamos a llamar la funcion mensajeAtaque
    mensajeAtaque()
}

function combate() {
    //obtenemos los span para modificar las vidas de las mascotas
    let spanVidasJugador = document.getElementById("vidasJugador")
    let spanVidasEnemigo = document.getElementById("vidasEnemigo")
    // Cargamos un sonido
    let sonidoGolpe = new Audio("./audio/sonidoGolpe.mp3");
    // Cargamos un sonido
    let sonidoBloqueo = new Audio("./audio/sonidoBloqueo.mp3");
    //validamos quien gano. Si jugador gano, se restan vidas al enemigo y viceversa
    //despues de restar la vida de una mascota, se actualiza su vida en pantalla
    //por ultimo, mandamos a llamar la funcion mensajeQuienGano con parametro un mensaje de que si GANO, PERDIO O EMPATO
    if (ataqueEnemigo == ataqueJugador) {
        mensajeQuienGano("EMPATE")
        sonidoBloqueo.play()
    } else if (ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA') {
        mensajeQuienGano("GANASTE")
        sonidoGolpe.play()
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if (ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO') {
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
        sonidoGolpe.play()
        mensajeQuienGano("GANASTE")
    } else if (ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA') {
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
        sonidoGolpe.play()
        mensajeQuienGano("GANASTE")
    } else {
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
        mensajeQuienGano("PERDISTE")
        sonidoGolpe.play()
    }
    //mandamos a llamar a la funcion revisarVidas
    revisarVidas()
}

function revisarVidas() {
    //validamos quien llego a 0 vidas y definimos el ganador mandando a llamar a la funcion mensajeFinal
    //con el mensaje final de victoria o derrrota
    if (vidasEnemigo == 0) {
        mensajeFinal("Felicitaciones, GANASTE")
    } else if (vidasJugador == 0) {
        mensajeFinal("Lo siento, PERDISTE")
    }
}

function reiniciarJuego() {
    //carga la pagina
    location.reload()
}