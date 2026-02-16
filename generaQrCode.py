import qrcode

BASE_URL = "https://stefaniaperera.github.io/playlist_laurea/"

canzoni = {

    "World Hold On": "6t180YbVeK9MWrj2zjMr5Z",
    "I Adore You": "5nPbKG04fhLkIAjcPFaZq7",
    "Strada Facendo": "7lqWgYgGqid459SqZaXC0X",

}

print("Generazione QR 'Middleman'...")

for nome, track_id in canzoni.items():

    final_link = f"{BASE_URL}?id={track_id}"

    qr = qrcode.QRCode(box_size=10, border=4)
    qr.add_data(final_link)
    qr.make(fit=True)

    img = qr.make_image(fill_color="black", back_color="white")
    img.save(f"{nome}.png")
    
    print(f"Creato: {nome}.png -> Punta al tuo sito con ID {track_id}")