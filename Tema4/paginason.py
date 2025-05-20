#importamos la libreria nicegui
from nicegui import ui
# Puedes usar una URL de un archivo de audio público o uno local en tu proyecto
#URL del audio que se va a ejecutar
AUDIO_URL = 'sonidoBloqueo.mp3'
#label que muestra un mensaje
ui.label(' Reproductor de audio')
# Control de audio
audio = ui.audio(AUDIO_URL, autoplay=False, controls=True)
# Botones para controlar manualmente desde Python
with ui.row():
    ui.button('Reproducir', on_click=lambda: audio.run_method('play'))
    ui.button('Pausar', on_click=lambda: audio.run_method('pause'))
#ejecutar la app
ui.run()