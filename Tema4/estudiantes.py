#importamos la libreria nicegui
from nicegui import ui
# Se crea un diccionario con los datos
datos = [
    {'Nombre': 'Ana', 'Edad': 21},
    {'Nombre': 'Luis', 'Edad': 23},
    {'Nombre': 'Carla', 'Edad': 22},
]

# Definir correctamente las columnas
columnas = [
    {'name': 'Nombre', 'label': 'Nombre', 'field': 'Nombre'},
    {'name': 'Edad', 'label': 'Edad', 'field': 'Edad'}
]

# Crear la tabla con las columnas y los datos
ui.table(columns=columnas, rows=datos, row_key='Nombre')
#ejecuta la app
ui.run()