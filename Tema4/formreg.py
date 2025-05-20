#importamos la libreria nicegui
from nicegui import ui
ui.label('Formulario').classes('text-h4')
#funcion que notifica que se registro el usuario
def enviar():
    ui.notify(f'Usuario {nombre.value} registrado con éxito')
#creamos un formulario con label y su respectivos input
#lo que escriba el usuario se guarda en variables
nombre = ui.input(label='Nombre')
email = ui.input(label='Email')
contraseña = ui.input(label='Contraseña', password=True)
#creamos un elemento de de tipo checkbox
ui.checkbox('Acepto los términos')
#creamos un boton y le asignamos el evento enviar()
ui.button('Registrarse', on_click=enviar)
# Ejecutar la app
ui.run()