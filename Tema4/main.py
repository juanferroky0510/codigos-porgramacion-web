""" importamos la libreria nicegui """
from nicegui import ui
""" creamos una etiqueta label """
ui.label("Hola mundo")
""" creamos un boton con una funcion que que lanza un alert """
ui.button("Haz click", on_click=lambda: ui.notify("Boton clickeado"))
ui.run()