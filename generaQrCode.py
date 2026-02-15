import qrcode

# IL TUO SITO GITHUB PAGES (o dove carichi l'html)
BASE_URL = "https://stefaniaperera.github.io/playlist_laurea/"

# DIZIONARIO (Nome File : ID Canzone Spotify)
# Nota: Qui metti SOLO l'ID, non tutto il link! 
# L'ID è la parte alfanumerica finale del link di Spotify.
canzoni = {
    #https://open.spotify.com/intl-it/track/6t180YbVeK9MWrj2zjMr5Z?si=02c00d1e1c1e4f6d
    #https://open.spotify.com/intl-it/track/5nPbKG04fhLkIAjcPFaZq7?si=6e295ead18cd4757
    "World Hold On": "6t180YbVeK9MWrj2zjMr5Z",  # ID
    "I Adore You": "5nPbKG04fhLkIAjcPFaZq7",
    # ... eccetera
}

print("Generazione QR 'Middleman'...")

for nome, track_id in canzoni.items():
    
    # Costruiamo il link alla TUA pagina
    # Esempio: https://tuosito.io/?id=119c93MHqi75DdrFnmKnTE
    final_link = f"{BASE_URL}?id={track_id}"

    qr = qrcode.QRCode(box_size=10, border=4)
    qr.add_data(final_link)
    qr.make(fit=True)

    img = qr.make_image(fill_color="black", back_color="white")
    img.save(f"{nome}.png")
    
    print(f"Creato: {nome}.png -> Punta al tuo sito con ID {track_id}")