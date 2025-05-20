""" importamos la libreria nicegui """
from nicegui import ui
# Título
ui.label(' Calculadora Simple').classes('text-h4')
# Entradas de número
num1 = ui.number(label='Número 1', value=0)
num2 = ui.number(label='Número 2', value=0)
# Resultado
resultado = ui.label('Resultado: 0').classes('text-h6')

# Botón para sumar
def sumar():
   #obtenemos los valores y los sumamos
   suma = num1.value + num2.value
   #pegamos el resultado de la suma al label
   resultado.text = f'Resultado: {suma}'
   ui.notify(f'La suma es {suma}')

# Botón para restar
def restar():
   #obtenemos los valores y los restamos
   resta = num1.value - num2.value
   #pegamos el resultado de la resta al label
   resultado.text = f'Resultado: {resta}'
   ui.notify(f'La resta es {resta}')

# Botón para multiplicar
def multiplicar():
   #obtenemos los valores y los multiplicamos
   multi = num1.value * num2.value
   #pegamos el resultado de la multiplicacion al label
   resultado.text = f'Resultado: {multi}'
   ui.notify(f'El producto es {multi}')

# Botón para division
def division():
   #validamos si el num2 es 0
   if(num2.value == 0):
      resultado.text = f'No se puede dividir'
      ui.notify(f'No se puede dividir')
   else:
      #obtenemos los valores y los dividimos
      div = num1.value / num2.value
      #pegamos el resultado de la division al label
      resultado.text = f'Resultado: {div}'
      ui.notify(f'La división es {div}')
   
with ui.row():
   #boton para sumar
   ui.button('Sumar', on_click=sumar)
   #boton para restar
   ui.button('Restar', on_click=restar)
   #boton para multiplicar
   ui.button('Multiplicar', on_click=multiplicar)
   #boton para sumar
   ui.button('Dividir', on_click=division)
# Ejecutar la app
ui.run()