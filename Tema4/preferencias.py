#importamos la libreria nicegui
from nicegui import ui
#funcion que notifica que se guardo la preferencia
def mostrar():
    ui.notify(f'Color: {color.value}, Tema oscuro: {tema.value}')
#selector que muestra 3 opciones a elegir
color = ui.select(['Rojo', 'Verde', 'Azul'], label='Color favorito')
#switch para activar o desactivar tema oscuro
tema = ui.switch('Tema oscuro')
#boton para guardar la configuracion
ui.button('Guardar preferencias', on_click=mostrar)
#ejecutar la app
ui.run()