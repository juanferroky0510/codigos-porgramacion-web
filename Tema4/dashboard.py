#importamos la libreria nicegui
from nicegui import ui
#creamos una fila
with ui.row():
    #creamos una tarjeta
    with ui.card():
        #contenido de la tarjeta
        ui.label('Ventas')
        ui.label('$1,200')
    with ui.card():
        ui.label('Usuarios')
        ui.label('342')
    with ui.card():
        ui.label('Tickets')
        ui.label('18')
#ejecuta la app
ui.run()
