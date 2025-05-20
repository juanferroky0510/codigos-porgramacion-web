let btnAprenderUnidades = document.getElementById("btnAprenderUnidades");
let btnAventurasMatematicas = document.getElementById("btnAventurasMatematicas");
btnAprenderUnidades.addEventListener("click", infoAprenderUnidades);
btnAventurasMatematicas.addEventListener("click", generarEjercicioAM)
let respuestasAN = ["", "", ""];
let res = [null, null, null];
let compararRes = [0, 0, 0];


//funcion de pruba para saber si funciona correctamente el boton btnAventurasMatematicas (borrar o modificar despues)
function generarEjercicioAM() {
    //deshabilitamos botones
    btnAprenderUnidades.disabled = false;
    btnAventurasMatematicas.disabled = true;
    //obtenemos el id de la sección
    let secEjercicioAN = document.getElementById('secEjercicioAN');
    //vaciamos la seccion para poder agregar nuevos elementos
    secEjercicioAN.innerHTML = "";
}


function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function infoAprenderUnidades() {
    //obtenemos el id de la sección
    let secEjercicioAN = document.getElementById('secEjercicioAN');
    //vaciamos la seccion para poder agregar nuevos elementos
    secEjercicioAN.innerHTML = "";
    secEjercicioAN.innerHTML = '<h3>Descubriendo las centenas, decenas y unidades</h3>'
    secEjercicioAN.innerHTML += '<p>Hoy vamos a aprender sobre un secreto muy divertido de los números: cómo se organizan en centenas, decenas y unidades.</p>'
    secEjercicioAN.innerHTML += '<button class="btnRespuestas my-3" onclick="infoAprenderUnidades2()">Siguiente</button>'

}
function infoAprenderUnidades2() {
    //obtenemos el id de la sección
    let secEjercicioAN = document.getElementById('secEjercicioAN');
    //vaciamos la seccion para poder agregar nuevos elementos
    secEjercicioAN.innerHTML = "";
    secEjercicioAN.innerHTML = '<p>Imagina que tienes una caja llena de canicas. Si contamos todas, tenemos un número grande, pero para organizarlo mejor, podemos separarlas en grupos:</p>'
    secEjercicioAN.innerHTML += '<ol><li> Las unidades son cada una de las canicas sueltas.Si tienes entre 1 y 9 canicas, todavía no tienes suficientes para formar una decena.</li><li>Las decenas son grupos de 10 unidades. Por ejemplo, si juntas 10 canicas en una bolsita, tendrás 1 decena. Si tienes 2 bolsitas de 10, tendrás 2 decenas, que es lo mismo que 20 canicas.</li><li>Las centenas son grupos de 100 unidades. Si juntas 10 bolsitas de 10 canicas, ¡habrás formado 1 centena!</li></ol>'
    secEjercicioAN.innerHTML += '<button class="btnRespuestas my-3" onclick="infoAprenderUnidades()">Atras</button>'
    secEjercicioAN.innerHTML += '<button class="btnRespuestas ms-3 my-3" onclick="infoAprenderUnidades3()">Siguiente</button>'

}
function infoAprenderUnidades3(){
    //obtenemos el id de la sección
    let secEjercicioAN = document.getElementById('secEjercicioAN');
    //vaciamos la seccion para poder agregar nuevos elementos
    secEjercicioAN.innerHTML = "";
    secEjercicioAN.innerHTML = '<p>Veamos un número: 243</p>'
    secEjercicioAN.innerHTML += '<ul><li>El 2 está en el lugar de las centenas, significa 200.</li><li>El 4 está en el lugar de las decenas, significa 40.</li><li>El 3 está en el lugar de las unidades, significa 3.</li></ul>'
    secEjercicioAN.innerHTML += '<p>Por eso, 243 quiere decir dos centenas, cuatro decenas y tres unidades. ¡Así de fácil!</p>'
    secEjercicioAN.innerHTML += '<button class="btnRespuestas my-3" onclick="infoAprenderUnidades2()">Atras</button>'
    secEjercicioAN.innerHTML += '<button class="btnRespuestas ms-3 my-3" onclick="generarEjercicioUnidades()">Práctcar</button>'
}

function generarEjercicioUnidades() {
    //deshabilitamos botones
    btnAprenderUnidades.disabled = true;
    btnAventurasMatematicas.disabled = false;
    //obtenemos el id de la sección
    let secEjercicioAN = document.getElementById('secEjercicioAN');
    //vaciamos la seccion para poder agregar nuevos elementos
    secEjercicioAN.innerHTML = "";
    //generamos el ejercicio de manera aleatoria
    let centena = 0
    let decena = 0
    let unidad = 0
    do {
        centena = aleatorio(0, 9);
        decena = aleatorio(0, 9);
        unidad = aleatorio(0, 9);
    } while (centena == decena || centena == unidad || decena == unidad)
    compararRes[0] = centena;
    compararRes[1] = decena;
    compararRes[2] = unidad;

    //empezamos a agregar los elementos
    secEjercicioAN.innerHTML = "<h3>Arrastra los números en la casilla correspondiente</h3>";
    secEjercicioAN.innerHTML += "<h4>" + centena + "" + decena + "" + unidad + "</h4>";
    //agregamos los contenedores donde se arrastraran los elementos
    secEjercicioAN.innerHTML += '<table class="table table-bordered border-dark"><thead><tr><th scope="col" style="background-color: #00B050;">Centena</th><th scope="col" style="background-color: #0070C0;">Decena</th><th scope="col" style="background-color: #FF0000;">Unidad</th></tr></thead><tbody id="filaTablaRepsuestasEvaluar"><tr><td id="0" class="p-5" scope="row" ondrop="drop(event)" ondragover="allowDrop(event)"></td><td id="1" ondrop="drop(event)" ondragover="allowDrop(event)"></td><td id="2" ondrop="drop(event)" ondragover="allowDrop(event)"></td></tr></tbody></table>';
    // Agregamos las respuestas de manera aleatoria
    let numAleatorio = aleatorio(0, 2);
    res[numAleatorio] = centena;
    let ale;
    do {
        ale = aleatorio(0, 2);
    } while (numAleatorio === ale); // Asegurarnos de que 'ale' sea diferente de 'numAleatorio'
    res[ale] = decena;

    // Asignar el valor de 'unidad' al índice restante
    for (let i = 0; i < 3; i++) {
        if (res[i] == null) {
            res[i] = unidad;
            break; // Salimos del bucle una vez asignado
        }
    }

    //agregamos los elementos a arrastrar
    secEjercicioAN.innerHTML += '<table class="table"><thead><tr id="trFilaRespuestas"><th scope="col"><div style="background-color: white; border: 1px solid black;" id="n' + res[0] + '" draggable="true" ondragstart="drag(event)">' + res[0] + '</div></th><th scope="col"><div style="background-color: white; border: 1px solid black;" id="n' + res[1] + '" draggable="true" ondragstart="drag(event)">' + res[1] + '</div></th><th scope="col"><div style="background-color: white; border: 1px solid black;" id="n' + res[2] + '" draggable="true" ondragstart="drag(event)">' + res[2] + '</div></th></tr></thead></table>';
}

//funcion que evita que el elemento se abra como enlace al soltar el elemento
function allowDrop(ev) {
    ev.preventDefault();
}

//funcion que define que sucede cuando se arrastra un elemento
function drag(ev) {
    //metodo que define el tipo de dato y el valor que se va a arrastrar al arrastrar un elemento
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    //validamos si el contenedor al que vamos a arrastrar el elemento esta vacio
    //ya que "ev.target.id" atrae el id del contenedor donde se alamcenara el elemento arrastrado
    //el cual puede ser 0,1 o 2
    if (respuestasAN[parseInt(ev.target.id)] == "") {
        //obtenemos los datos arrastrados
        let dato = ev.dataTransfer.getData("text");
        //agregamos el dato al arreglo para decir que ese contenedor ya esta ocupado
        respuestasAN[parseInt(ev.target.id)] = dato;
        //agregamos el elemento arrastrado al contenedor
        ev.target.appendChild(document.getElementById(dato));
    }

    //validamos que todos los contenedores no esten vacios
    if (respuestasAN[0] != "" && respuestasAN[1] != "" && respuestasAN[2] != "") {
        //validamos que cada contenedor corresponda al elemento arrastrado
        if (respuestasAN[0] == ("n" + compararRes[0]) && respuestasAN[1] == ("n" + compararRes[1]) && respuestasAN[2] == ("n" + compararRes[2])) {
            //si sí corresponde, se genera otro ejercicio y se reinician valores
            //alert("MUY BIEN");
            // Cargamos un sonido
            let sonido = new Audio("./sonidos/sonidoVictoria.mp3");
            // reproducimos el sonido
            sonido.play();
            respuestasAN = ["", "", ""];
            res = [null, null, null];
            compararRes = [0, 0, 0];
            generarEjercicioUnidades();
        } else {
            // Cargamos un sonido
            let sonido = new Audio("./sonidos/sonidoError.mp3");
            // reproducimos el sonido
            sonido.play();
            //si no corresponde, se reinicia el ejercicio
            //alert("INTENTA DE NUEVO");
            document.getElementById("trFilaRespuestas").innerHTML = '<th scope="col"><div style="background-color: white; border: 1px solid black;" id="n' + res[0] + '" draggable="true" ondragstart="drag(event)">' + res[0] + '</div></th><th scope="col"><div style="background-color: white; border: 1px solid black;" id="n' + res[1] + '" draggable="true" ondragstart="drag(event)">' + res[1] + '</div></th><th scope="col"><div style="background-color: white; border: 1px solid black;" id="n' + res[2] + '" draggable="true" ondragstart="drag(event)">' + res[2] + '</div></th>';
            document.getElementById("filaTablaRepsuestasEvaluar").innerHTML = '<tr><td id="0" class="p-5" scope="row" ondrop="drop(event)" ondragover="allowDrop(event)"></td><td id="1" ondrop="drop(event)" ondragover="allowDrop(event)"></td><td id="2" ondrop="drop(event)" ondragover="allowDrop(event)"></td></tr>';
            respuestasAN = ["", "", ""];
        }
    }
}