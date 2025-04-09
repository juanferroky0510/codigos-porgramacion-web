function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function eleccion(jugada) {
    let resultado = ""
    if (jugada == 1) {
        resultado = "Piedra 🪨"
    } else if (jugada == 2) {
        resultado = "Papel 📄"
    } else if (jugada == 3) {
        resultado = "Tijera ✂️"
    } else {
        resultado = "Elegiste PERDER"
    }
    return resultado
}

function combate() {
    pc = aleatorio(1, 3) //pc recibe un numero aleatorio entre el 1 y 3 que retorna la funcion aleatorio
    jugador = prompt("Elige: \n1.-piedra \n2.-papel \n3.-tijera") //usuario ingresa un numero
    //combate
    if (jugador < 1 || jugador > 3 || isNaN(jugador)) {
        alert("Por favor, introduce datos correctos")
    } else {
        alert("PC elige: " + eleccion(pc) + "\n" + txtNombre.value + " eliges: " + eleccion(jugador))
        if (pc == jugador) { //empate
            alert("Empate")
        } else if (jugador == 1 && pc == 3) { //jugador=piedra gana a pc=tijera
            alert("GANASTE")
            triunfos += 1 //al ganar se acumula 1 a triunfos
        } else if (jugador == 2 && pc == 1) {//jugador=papel gana a pc=piedra
            alert("GANASTE")
            triunfos += 1 //al ganar se acumula 1 a triunfos
        } else if (jugador == 3 && pc == 2) {//jugador=tijera gana a pc=papel
            alert("GANASTE")
            triunfos += 1 //al ganar se acumula 1 a triunfos
        } else {
            alert("PERDISTE")
            perdidas += 1 //al perder se acumula 1 a perdidas
        }
    }

}

function iniciarJuego() {
    //el ciclo o juego se acaba hasta que el usuario tenga 3 triunfos o perdidas
    while (triunfos < 3 && perdidas < 3) {
        combate()
    }
    //se imprime los resultados del juego
    alert("Ganaste: " + triunfos + " veces.\nPerdiste " + perdidas + " veces.")
    //cuando se muestren los resultados el juego habrá acabado, por lo que hay que reiniciar las variables
    jugador = 0
    pc = 0
    triunfos = 0
    perdidas = 0
}

function validarEdad() {
    //se crea un objeto de tipo Date para obtener la fecha actual
    let fechaActual = new Date();
    // Obtener el año actual
    let anioActual = fechaActual.getFullYear();
    //de la fecha de nacimiento, con split extraemos solo el año
    let anioJugador = dtFechaNacimiento.value.split('-')[0]
    //calculamos la edad del jugador
    let edad = anioActual - anioJugador
    if (edad < 18) {
        //si tiene menos de 18 años, no puede jugar al juego
        return false
    } else {
        //si tiene 18 años o mas, puede jugar al juego
        return true
    }
}

function validarCampos() {
    //validamos que el usuario si haya introducido datos
    if (txtNombre.value == "" || dtFechaNacimiento.value == "") {
        alert("Por favor, introduce datos")
    } else if (validarEdad()) {//si sí puso datos, entonces empezamos a validar la edad
        iniciarJuego()//inicia el juego si tiene 18 años o más
    } else {
        //no inicia el juego si tiene menos de 18 años
        alert(txtNombre.value + " eres menor de edad, no puedes jugar")
    }
}

// piedra=1 papel=2 tijera=3
let jugador = 0
let triunfos = 0
let perdidas = 0
let pc = 0
//obtenemos el nombre del jugador
let txtNombre = document.getElementById("txtNombre")
//obtenemos la fecha de nacimiento del jugador
let dtFechaNacimiento = document.getElementById("dtFechaNacimiento")
//al botono con dicho ID le agregamos un evento cuando el jugador hace click en él
document.getElementById("btnEmepezarJuego").addEventListener('click', validarCampos)