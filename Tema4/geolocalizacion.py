from nicegui import ui
lat = 20.08406
lon = -98.77505
map_url = f"https://www.google.com/maps?q={lat},{lon}&hl=es"
ui.button('Ver mapa en Google Maps', on_click=lambda: ui.run_javascript(f'window.open("{map_url}", "_blank")'))
ui.run()