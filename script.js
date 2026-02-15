// script.js

document.addEventListener("DOMContentLoaded", () => {
    
    // ------------------------------------------------------
    // CONFIGURAZIONE: INSERISCI QUI IL TUO ID PLAYLIST
    // ------------------------------------------------------
    const PLAYLIST_ID = "7Eo69Vk7vDMnLKB7PzPyjK"; 
    //https://open.spotify.com/playlist/7Eo69Vk7vDMnLKB7PzPyjK?si=0daea0155bf846a3
    // ------------------------------------------------------

    const params = new URLSearchParams(window.location.search);
    const trackId = params.get('id');
    const container = document.getElementById('embed-container');
    
    // Prendiamo i riferimenti ai bottoni
    const btnApp = document.getElementById('btn-app');
    const btnWeb = document.getElementById('btn-web');

    if (trackId) {
        // 1. GENERIAMO IL PLAYER (Compact o Large a tua scelta)
        const iframeHtml = `
            <iframe 
                style="border-radius:12px" 
                src="https://open.spotify.com/embed/track/${trackId}?utm_source=generator&theme=0" 
                width="100%" 
                height="352" 
                frameBorder="0" 
                sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation allow-popups-to-escape-sandbox"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                loading="lazy">
            </iframe>
        `;
        
        container.innerHTML = iframeHtml;
        container.classList.remove('loading');

        // 2. GENERIAMO I LINK DINAMICI ("Deep Linking")
        
        // LINK APP: "Apri Traccia X nel contesto della Playlist Y"
        // Sintassi: spotify:track:{ID_TRACCIA}?context=spotify:playlist:{ID_PLAYLIST}
        const appLink = `spotify:track:${trackId}?context=spotify:playlist:${PLAYLIST_ID}`;
        
        // LINK WEB: Versione HTTPS dello stesso concetto
        const webLink = `https://open.spotify.com/track/${trackId}?context=spotify:playlist:${PLAYLIST_ID}`;

        // 3. AGGIORNIAMO I BOTTONI
        if (btnApp) btnApp.href = appLink;
        if (btnWeb) btnWeb.href = webLink;
        
    } else {
        container.innerHTML = "<p>Errore: Nessuna canzone specificata.</p>";
        // Nascondiamo i bottoni se non c'è la canzone
        if (btnApp) btnApp.style.display = 'none';
        if (btnWeb) btnWeb.style.display = 'none';
    }
});