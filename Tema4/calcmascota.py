#importamos la libreria nicegui
from nicegui import ui
ui.label(' Calculadora de Edad de Mascota').classes('text-h4')
#funcion que calcula la edad de una mascota
def calcular():
    #calculamos la edad
    edad_mascota = int(humano.value) * 7
    #la edad se coloca en la etiqueta del label "resultado"
    resultado.set_text(f'Edad estimada en años perrunos:{edad_mascota}')
#creamos una elemento input de tipo numero y lo que escriba el usuario se guarda en una varaible
humano = ui.number(label='Edad humana')
#creamos un boton y le asignamos el evento calcular()
ui.button('Calcular edad de mascota', on_click=calcular)
#creamos un elemento label
resultado = ui.label()
# Ejecutar la app
ui.run()