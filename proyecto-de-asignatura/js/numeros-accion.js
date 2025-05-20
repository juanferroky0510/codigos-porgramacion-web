let resultadoNA = 0;
//botones para seleccionar uno de los dos temas
let btnSTSumaResta = document.getElementById("btnSTSumaResta");
let btnSTConocerMulti = document.getElementById("btnSTConocerMulti");
btnSTSumaResta.addEventListener("click", infoSumaResta);
btnSTConocerMulti.addEventListener("click", infoMulti);

function infoMulti(){
    //obtenemos el id de la sección
    let secEjerciciosNA = document.getElementById('secEjerciciosNA');
    //vaciamos la seccion para poder agregar nuevos elementos
    secEjerciciosNA.innerHTML = "";
    secEjerciciosNA.innerHTML = '<h3>Multiplicación: sumas rápidas</h3>'
    secEjerciciosNA.innerHTML += '<p>La multiplicación es una manera de sumar varias veces el mismo número, ¡pero más rápido!</p>'
    secEjerciciosNA.innerHTML += '<button class="btnRespuestas my-3" onclick="infoMulti2()">Siguiente</button>'
}
function infoMulti2(){
    //obtenemos el id de la sección
    let secEjerciciosNA = document.getElementById('secEjerciciosNA');
    //vaciamos la seccion para poder agregar nuevos elementos
    secEjerciciosNA.innerHTML = "";
    secEjerciciosNA.innerHTML += '<p>Imagina que tienes 3 cajas y en cada caja hay 4 muñecos. En vez de sumar 4 + 4 + 4, podemos multiplicar: 3 × 4 = 12. Esto significa que en total hay 12 muñecos.</p>'
    secEjerciciosNA.innerHTML += '<button class="btnRespuestas my-3" onclick="infoMulti()">Atras</button>'
    secEjerciciosNA.innerHTML += '<button class="btnRespuestas ms-3 my-3" onclick="infoMulti3()">Siguiente</button>'
}
function infoMulti3(){
    //obtenemos el id de la sección
    let secEjerciciosNA = document.getElementById('secEjerciciosNA');
    //vaciamos la seccion para poder agregar nuevos elementos
    secEjerciciosNA.innerHTML = "";
    secEjerciciosNA.innerHTML += '<p>La multiplicación usa dos números:</p>'
    secEjerciciosNA.innerHTML += '<p>El primer número nos dice cuántos grupos hay.</p>'
    secEjerciciosNA.innerHTML += '<p>El segundo número nos dice cuántos hay en cada grupo.</p>'
    secEjerciciosNA.innerHTML += '<p>Por ejemplo. Si tienes 5 macetas y en cada maceta hay 2 flores, la operación es: 5 × 2 = 10 (Tienes 10 flores en total).</p>'
    secEjerciciosNA.innerHTML += '<button class="btnRespuestas my-3" onclick="infoMulti2()">Atras</button>'
    secEjerciciosNA.innerHTML += '<button class="btnRespuestas ms-3 my-3" onclick="presentarMulti()">Prácticar</button>'
}


function infoSumaResta(){
     //obtenemos el id de la sección
    let secEjerciciosNA = document.getElementById('secEjerciciosNA');
    //vaciamos la seccion para poder agregar nuevos elementos
    secEjerciciosNA.innerHTML = "";
    secEjerciciosNA.innerHTML = '<h3>¡Sumemos y restemos juntos!</h3>'
    secEjerciciosNA.innerHTML += '<p>Hoy aprenderemos dos operaciones mágicas que usamos todos los días: la suma y la resta.</p>'
    secEjerciciosNA.innerHTML += '<button class="btnRespuestas my-3" onclick="infoSumaResta2()">Siguiente</button>'
}
function infoSumaResta2(){
        //obtenemos el id de la sección
    let secEjerciciosNA = document.getElementById('secEjerciciosNA');
    //vaciamos la seccion para poder agregar nuevos elementos
    secEjerciciosNA.innerHTML = "";
    secEjerciciosNA.innerHTML = '<h4>¿Qué es la suma?</h4>'
    secEjerciciosNA.innerHTML += '<p>La suma es cuando juntamos cosas para tener más. Imagina que tienes 3 manzanas y tu amigo te da 2 más. Para saber cuántas tienes en total, hacemos la suma:</p>'
    secEjerciciosNA.innerHTML += '<p>3 + 2 = 5</p>'
    secEjerciciosNA.innerHTML += '<p>Ahora tienes 5 manzanas en total. ¡La suma nos ayuda a encontrar el total cuando agregamos más!</p>'
    secEjerciciosNA.innerHTML += '<button class="btnRespuestas my-3" onclick="infoSumaResta()">Atras</button>'
    secEjerciciosNA.innerHTML += '<button class="btnRespuestas ms-3 my-3" onclick="infoSumaResta3()">Siguiente</button>'
}
function infoSumaResta3(){
        //obtenemos el id de la sección
    let secEjerciciosNA = document.getElementById('secEjerciciosNA');
    //vaciamos la seccion para poder agregar nuevos elementos
    secEjerciciosNA.innerHTML = "";
    secEjerciciosNA.innerHTML = '<h4>¿Qué es la resta?</h4>'
    secEjerciciosNA.innerHTML += '<p>La resta es cuando quitamos o perdemos algo. Imagina que tienes 5 caramelos, pero te comes 2. Para saber cuántos quedan, hacemos la resta:</p>'
    secEjerciciosNA.innerHTML += '<p>5 - 2 = 3</p>'
    secEjerciciosNA.innerHTML += '<p>Ahora solo te quedan 3 caramelos. ¡La resta nos ayuda a saber cuántos quedan después de quitar algo!</p>'
    secEjerciciosNA.innerHTML += '<button class="btnRespuestas my-3" onclick="infoSumaResta2()">Atras</button>'
    secEjerciciosNA.innerHTML += '<button class="btnRespuestas ms-3 my-3" onclick="presentarSumaResta()">Prácticar</button>'
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function signoSumaResta() {
    let signoAleatorio = aleatorio(1, 2);
    if (signoAleatorio == 1) {
        return "+";
    } else {
        return "-";
    }
}

function validarRespuestaSumRes() {
    if (this.innerText == resultadoNA) {
        //alert("CORRECTO");
        // Cargamos un sonido
        let sonido = new Audio("./sonidos/sonidoVictoria.mp3");
        // reproducimos el sonido
        sonido.play();
        presentarSumaResta();
    } else {
        //alert("INCORRECTO");
        // Cargamos un sonido
        let sonido = new Audio("./sonidos/sonidoError.mp3");
        // reproducimos el sonido
        sonido.play();
    }
}

function validarRespuestaMulti() {
    if (this.innerText == resultadoNA) {
        //alert("CORRECTO");
        // Cargamos un sonido
        let sonido = new Audio("./sonidos/sonidoVictoria.mp3");
        // reproducimos el sonido
        sonido.play();
        presentarMulti();
    } else {
        //alert("INCORRECTO");
        // Cargamos un sonido
        let sonido = new Audio("./sonidos/sonidoError.mp3");
        // reproducimos el sonido
        sonido.play();
    }
}

function presentarSumaResta() {
    //deshabilitamos botones
    btnSTSumaResta.disabled = true;
    btnSTConocerMulti.disabled = false;
    //obtenemos el id de la sección
    let secEjerciciosNA = document.getElementById('secEjerciciosNA');
    //vaciamos la seccion para poder agregar nuevos elementos
    secEjerciciosNA.innerHTML = "";
    //obtenemos de manera aleatoria el ejercicio
    let signo = signoSumaResta();
    let num1 = 0;
    let num2 = 0;
    let textoEjercicio = "";
    resultadoNA = 0;
    //validamos que el resultado de la resta sea un numero positivo y no negativo
    if (signo == "-") {
        do {
            num1 = aleatorio(1, 50);
            num2 = aleatorio(1, 50);
        } while (num1 < num2);
        resultadoNA = num1 - num2;
        textoEjercicio = num1 + " " + signo + " " + num2 + " = ?";
    } else {
        num1 = aleatorio(1, 50);
        num2 = aleatorio(1, 50);
        resultadoNA = num1 + num2;
        textoEjercicio = num1 + " " + signo + " " + num2 + " = ?";
    }

    //creamos las respuestas aleatorias
    let respuestas = [0, 0, 0];
    let posicioAleatoria = aleatorio(0, 2);
    respuestas[posicioAleatoria] = resultadoNA;
    for (let i = 0; i < 3; i++) {
        if (respuestas[i] != resultadoNA) {
            respuestas[i] = aleatorio(0, 50);
        }
    }

    //agregamos los elementos al HTML
    //agregamos el ejercicio
    secEjerciciosNA.innerHTML = '<h3>Selecciona la respuesta correcta</h3>';
    secEjerciciosNA.innerHTML += '<h4>'+textoEjercicio+'</h4>';
    //agregamos los botones con las respuestas
    secEjerciciosNA.innerHTML += '<div class="row"><div class="col"><button class="btnRespuestas" id="btnRespuestasNA1">'+respuestas[0]+'</button></div></div>';
    secEjerciciosNA.innerHTML += '<div class="row"><div class="col"><button class="btnRespuestas my-3" id="btnRespuestasNA2">'+respuestas[1]+'</button></div></div>';
    secEjerciciosNA.innerHTML += '<div class="row"><div class="col"><button class="btnRespuestas" id="btnRespuestasNA3">'+respuestas[2]+'</button></div></div>';
    //secEjerciciosNA.innerHTML += '<div class="row"><div class="col"><img class="imgToni3" src="imagenes/toni.png" alt="Ajolote Toni"></div></div>';

    //asignamos a los botones eventos para poder validar las respuestas
    let btnRespuestasNA1 = document.getElementById("btnRespuestasNA1");
    let btnRespuestasNA2 = document.getElementById("btnRespuestasNA2");
    let btnRespuestasNA3 = document.getElementById("btnRespuestasNA3");
    btnRespuestasNA1.addEventListener("click", validarRespuestaSumRes);
    btnRespuestasNA2.addEventListener("click", validarRespuestaSumRes);
    btnRespuestasNA3.addEventListener("click", validarRespuestaSumRes);
}

function presentarMulti() {
    //deshabilitamos botones
    btnSTSumaResta.disabled = false;
    btnSTConocerMulti.disabled = true;
    //creamos un arreglo para guardar codigos de colores
    let colores = ["#ED8E3E", "#FFC107", "#00B050", "#0070C0", "#CB97F9", "#E794BC", "#FF0000", "#DC5804", "#FFC107", "#00B050"]
    //obtenemos el id de la sección
    let secEjerciciosNA = document.getElementById('secEjerciciosNA');
    //vaciamos la seccion para poder agregar nuevos elementos
    secEjerciciosNA.innerHTML = "";

    //creamos el ejercicio de forma aleatoria
    let num1 = aleatorio(1,10);
    let num2 = aleatorio(1,10);
    let textoEjercicio = num1+" x "+num2;
    resultadoNA = num1 * num2;

    //agregamos el texto del ejercicio a la seccion
    let ejercicio = document.createElement("h3");
    ejercicio.textContent = "Selecciona la respuesta correcta: "+textoEjercicio;
    secEjerciciosNA.appendChild(ejercicio);
    //creamos la tabla
    let tabla = document.createElement("table");
    tabla.setAttribute("class","table table-bordered border-dark");
    //agregamos la tabla a la seccion
    secEjerciciosNA.appendChild(tabla);
    //creamos el encabezado
    let encabezado = document.createElement("thead");
    //agregamos el encabezado a la tabla
    tabla.appendChild(encabezado);
    //creamos la fila
    let fila = document.createElement("tr");
    //agregamos la fila al encabezado
    encabezado.appendChild(fila);
    //creamos una celda
    let celda = document.createElement("th");
    celda.style.backgroundColor = colores[6];
    //agregamos la celda a la fila
    fila.appendChild(celda);
    for (let i = 1; i <= 10; i++) {
        celda = document.createElement("th");
        celda.textContent = i;
        celda.setAttribute("scope","col");
        celda.style.backgroundColor = colores[i-1];
        fila.appendChild(celda);
    }
    //creamos un tbody y la agregamos a la tabla
    let tbody = document.createElement("tbody");
    tbody.setAttribute("id","tbodyTabla");
    tabla.appendChild(tbody);
    //obtenemos el tbody dentro de la tabla
    tbody = document.getElementById("tbodyTabla");

    for (let i = 1; i <= 10; i++) {
        fila = document.createElement('tr'); // Crear una nueva fila
        celda = document.createElement('td'); // Crear la celda para el número de la fila
        celda.textContent = i; // Asignar el número de la fila
        celda.setAttribute("scope","row");
        celda.style.backgroundColor = colores[i-1];
        fila.appendChild(celda); // Agregar la celda a la fila

        for (let j = 1; j <= 10; j++) {
            let celdaResultado = document.createElement('td'); // Crear una celda para el resultado
            let botonResultado = document.createElement("button");
            botonResultado.textContent = i * j;// Calcular el resultado de la multiplicación
            botonResultado.setAttribute("class","btnRespuestas");//agregamos clases al boton
            botonResultado.addEventListener("click",validarRespuestaMulti);
            celdaResultado.appendChild(botonResultado); //agregamos el boton a la celda
            fila.appendChild(celdaResultado); // Agregar la celda de resultado a la fila
        }

        tbody.appendChild(fila); // Agregar la fila a la tabla
    }
}