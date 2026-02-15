// script.js

document.addEventListener("DOMContentLoaded", () => {
    
    // ------------------------------------------------------
    // CONFIGURAZIONE:
    // ------------------------------------------------------
    const PLAYLIST_ID = "7Eo69Vk7vDMnLKB7PzPyjK"; 
    // https://open.spotify.com/playlist/7Eo69Vk7vDMnLKB7PzPyjK?si=09c0c2f88a304981
    // ------------------------------------------------------

    const params = new URLSearchParams(window.location.search);
    const trackId = params.get('id');
    const container = document.getElementById('embed-container');
    
    const btnApp = document.getElementById('btn-app');
    const btnWeb = document.getElementById('btn-web');

    if (trackId) {
        // 1. GENERIAMO IL PLAYER (Grande)
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

        // 2. LOGICA DEI BOTTONI
        
        // A) APP (Mobile): Apre la Canzone SPECIFICA dentro la Playlist
        // Questo comando è perfetto per il telefono.
        // Nota: Su PC a volte sbaglia mira, ma su mobile è infallibile.
        const appLink = `spotify:track:${trackId}?context=spotify:playlist:${PLAYLIST_ID}`;
        
        // B) WEB (Browser): Apre la PLAYLIST GENERALE (come volevi tu)
        // Torniamo al link classico pulito.
        const webLink = `https://open.spotify.com/playlist/7Eo69Vk7vDMnLKB7PzPyjK?si=09c0c2f88a304981`;

        // 3. AGGIORNIAMO I BOTTONI
        if (btnApp) btnApp.href = appLink;
        if (btnWeb) btnWeb.href = webLink;
        
    } else {
        container.innerHTML = "<p>Errore: Nessuna canzone specificata.</p>";
        if (btnApp) btnApp.style.display = 'none';
        if (btnWeb) btnWeb.style.display = 'none';
    }
});