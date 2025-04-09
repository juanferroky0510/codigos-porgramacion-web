//mandamos a llamar al framework de EmailJS
emailjs.init('Ie9iYnrDinqhCUMNA');
//obtenemos el boton de enviar el formulario por medio de su ID
const btnEnviarForm = document.getElementById('btnEnviarForm');
//obtenemos el formulario por su ID y determinamos que hace cuando se envia el formulario por medio de submit
document.getElementById('form')
    .addEventListener('submit', function (event) {
        event.preventDefault();
        //validamos si los campos son correctos
        if (valdiarCampos()) {
            btnEnviarForm.value = 'Enviando...';
            const serviceID = 'service_uzsid9r';
            const templateID = 'template_9hns93b';
            //enviamos el formulario al correo
            emailjs.sendForm(serviceID, templateID, this)
                .then(() => {
                    btnEnviarForm.value = 'Enviar';
                    alert('¡Correo enviado con éxito!');
                }, (err) => {
                    btnEnviarForm.value = 'Enviar';
                    alert('Error al enviar el correo: ' + JSON.stringify(err));
                });
        }
    });

//funcion que valida los campos del formualrio
function valdiarCampos() {
    //obtenemos por su ID los campos del formulario
    let nombre = document.getElementById("name").value;
    let correo = document.getElementById("email").value;
    let mensaje = document.getElementById("message").value;
    //expresion regular que valida el formato de un correo
    const patronCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    //validamos si los campos estan vacios
    if (nombre == "" || correo == "" || mensaje == "") {
        alert("FAVOR DE LLENAR LOS CAMPOS");
        return false;
    //validamos si el formato del correo es correcto
    } else if (!patronCorreo.test(correo)) {
        alert("EL CORREO NO ES VALIDO");
        return false;
    } else {
        //si todo esta bien, retornamos verdadero,
        //en caso contrario, retornamos falso
        return true;
    }
}