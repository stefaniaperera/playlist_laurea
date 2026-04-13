import qrcode

BASE_URL = "https://stefaniaperera.github.io/playlist_laurea/"

canzoni = {

    "1. Strada facendo": "7lqWgYgGqid459SqZaXC0X",
    "2. Con il nastro rosa": "2g3wyAWIAvmjfZ8K6Jb4Zn",
    "3. Sangue": "21XEwWfDyB3fHFndIburOf",
    "4. Pedro": "7AEfPUY8gHoEzQja4OOO49",
    "5. Cuando calienta el sol": "5zWATXFDfxAAmXxxhdWgjZ",
    "6. Killing me sofly": "7IuR13GY471Tbz4lp9DKOZ",
    "7. Sultans of swing": "37Tmv4NnfQeb0ZgUC4fOJj",
    "8. World Hold On": "6t180YbVeK9MWrj2zjMr5Z",
    "9. Is this love": "6JRLFiX9NJSoRRKxowlBYr",
    "10. Buongiorno": "5DuRESeey8uuWJQXqm4Hg2",
    "11. Neththara": "4mWvUu7JbgBb7oSZtPPhsU",
    "12. Do for love": "4AE7Lj39VnSZNOmGH2iZaq",
    "13. Heaven": "7Ewz6bJ97vUqk5HdkvguFQ",
    "14. Amore disperato": "3JiiSo4yW8FYVnWNlvzEFO",
    "15. Che fantastica storia è la vita": "5nRDOsITlnO6fAEJBd8lef",
    "16. Brivido": "7fH13hSOyNoeiDGbjEnTUC",
    "17. Better dayz": "5dRCujBQZQq6dlkCaGDMV0",
    "18. Every breath you take": "1JSTJqkT5qHq8MDJnJbRE1",
    "19. Stavo pensando a te": "3UPigmZoN3ahvBgQdU9VK5",
    "20. Clocks": "0BCPKOYdS2jbQ8iyB56Zns",
    "21. Respect": "7s25THrKz86DM225dOYwnr",
    "22. You got a friend": "1qhp5owrFGeZ5Jgin28nwR",
    "23. Una canzone per te": "5glUL9jOPUDeg3xCp8TUuR",
    "24. Last friday night": "455AfCsOhhLPRc68sE01D8",
    "25. Maracaibo": "1AsCxLAvSfilIM9ubCf89B",
    "26. La notte vola": "6IfssPkzcr7wMbAqa5fQtE",
    "27. Walk of life": "2DmZ7aPhT5jkqLIYxTpQlJ",
    "28. Curtain calls": "6KEI6vQDFcwtVNtD8Cg6gM",
    "29. Take me home country roads": "1QbOvACeYanja5pbnJbAmk",
    "30. Billie jean": "7J1uxwnxfQLu4APicE5Rnj",
    "31. Empire state of mind": "2igwFfvr1OAGX9SKDCPBwO",
    "32. Hotel california": "40riOy7x9W7GXjyGp4pjAv",
    "33. Meravigliosa creatura": "22PDt2TH3TezXffYMOMUzc",
    "34. Morning coffee": "5JChez1hix3cio2LrHgScq",
    "35. Angel": "7FDV5ELOJHCGLe52AnttEd",
    "36. Move": "1BJJbSX6muJVF2AK7uH1x4",
    "37. Could you be loved": "6ZXmTH4DpP07a2TvHx1EF9",
    "38. Love on the brain": "5oO3drDxtziYU2H1X23ZIp",
    "39. What is love": "0OTO8ZF2YqFQVw9hnZylTd",
    "40. Summer of 69": "0GONea6G2XdnHWjNZd6zt3",

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