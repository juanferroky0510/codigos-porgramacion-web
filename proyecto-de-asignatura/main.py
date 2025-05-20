# Importa la biblioteca Path para manejar rutas de archivos de manera flexible.
from pathlib import Path
#importamos la libreria nicegui
from nicegui import app, ui
# Importa la clase KeyEventArguments para manejar eventos de teclado.
from nicegui.events import KeyEventArguments

# Elimina el espacio de relleno (padding) del contenido principal de la interfaz.
ui.query('.nicegui-content').classes('p-0')
# Define la carpeta donde están almacenadas las imágenes.
folder = Path(__file__).parent / 'slides'
#se obtiene una lista ordenada de los nombres de los archivos de imágenes PNG en la carpeta.
files = sorted(f.name for f in folder.glob('*.png'))
# Crea un estado inicial para rastrear qué imagen se está mostrando.
state = {'index': 0}

#función para manejar eventos de teclado.
def handle_key(event: KeyEventArguments) -> None:
    # Verifica si la acción de la tecla es "presionada" (keydown).
    if event.action.keydown:
        # Si la flecha derecha es presionada, incrementa el índice para mostrar la siguiente imagen.
        if event.key.arrow_right:
            state['index'] += 1
        # Si la flecha izquierda es presionada, disminuye el índice para mostrar la imagen anterior.
        if event.key.arrow_left:
            state['index'] -= 1
        # Asegura que el índice siempre esté dentro del rango válido de imágenes.
        state['index'] %= len(files)
        # Actualiza la fuente de la imagen para mostrar la nueva.
        slide.set_source(f'slides/{files[state["index"]]}')

# Agrega la carpeta "slides" como archivos estáticos para que puedan ser servidos en la interfaz.
app.add_static_files('/slides', folder)
# Crea el elemento de imagen y muestra la primera imagen de la lista.
slide = ui.image(f'slides/{files[state["index"]]}')
# Configura el manejo de eventos de teclado para controlar el slider de imágenes.
ui.keyboard(on_key=handle_key)
#ejecuta la app
ui.run()