// Seleccionamos todas las imágenes con la clase "imgProyectoDescripcion"
let imgProyectoDescripcion = document.querySelectorAll('.imgProyectoDescripcion');
// Asignamos un evento a cada imagen 
imgProyectoDescripcion.forEach(img => {
    img.addEventListener("click", mostrarDescripcionProyecto);
});

//funcion que muestra la descripcion de un proyecto personal
function mostrarDescripcionProyecto() {
    //obtenemos el ID de la imagen que se clickeo
    let idImg = this.id;
    //obtenemos la celda donde se mostrara el texto
    let celdaTabla = document.getElementById("descripcionProyecto");
    //validamos que imagen se selecciono
    switch (idImg) {
        case "imgSimuladorBacterias":
            //limpiamos la celda
            celdaTabla.innerHTML="";
            //agregamos la descripcion
            celdaTabla.innerHTML='Un simulador de bacterias que simula la evolucion de una generación de bacterias. Este proyecto fue especial ya que me sirvio bastante para poner aprueba mi logica de programación. <a href="https://github.com/juanferroky0510/proyectos-personales.git" target="_blank">Ver proyecto</a>';
            break;
        case "imgCarroRemoto":
            //limpiamos la celda
            celdaTabla.innerHTML="";
            //agregamos la descripcion
            celdaTabla.innerHTML='Un carro robot con Arduino que se controla por sensor IR, puede hacer todos los movimiento e incluso giros de 90° y 360°, ademas de usar sensor ultrasonico. <a href="https://github.com/juanferroky0510/proyectos-personales.git" target="_blank">Ver proyecto</a>';
            break;
        case "imgMemento":
            //limpiamos la celda
            celdaTabla.innerHTML="";
            //agregamos la descripcion
            celdaTabla.innerHTML='Aplicación movil para adultos mayores con Alzheimer. Este fue importante porque fue el primer proyecto con el que competí en el InnovaTec. <a href="https://github.com/juanferroky0510/proyectos-personales.git" target="_blank">Ver proyecto</a>';
            break;
        case "imgEscuelitaMale":
            //limpiamos la celda
            celdaTabla.innerHTML="";
            //agregamos la descripcion
            celdaTabla.innerHTML='Una pagina web que ayuda a los niño de 2do año de primaria matematicas. Me gusto mucho este proyecto porque aqui puse a prueba mis habilidades y conocimiento en JavaScript y HTML, por lo que, aunque en ese momento eran escasos, creo que quedo bien. <a href="https://github.com/juanferroky0510/proyectos-personales.git" target="_blank">Ver proyecto</a>';
            break;
        default:
            alert("ERROR AL OPTENER ID");
    }
}