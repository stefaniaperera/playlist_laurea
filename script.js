document.addEventListener("DOMContentLoaded", () => {

    const PLAYLIST_ID = "7Eo69Vk7vDMnLKB7PzPyjK";

    const params = new URLSearchParams(window.location.search);
    const trackId = params.get('id');
    const container = document.getElementById('embed-container');
    
    const btnApp = document.getElementById('btn-app');
    const btnWeb = document.getElementById('btn-web');

    if (trackId) {

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

        const appLink = `spotify:track:${trackId}?context=spotify:playlist:${PLAYLIST_ID}`;
        
        const webLink = `https://open.spotify.com/embed/playlist/${PLAYLIST_ID}`;
        
        if (btnApp) {
            btnApp.href = appLink;

            btnApp.addEventListener('click', (e) => {
                e.preventDefault();

                const now = Date.now();
                
                window.location.href = appLink;

                setTimeout(() => {

                    if (document.visibilityState === 'visible') {
                        
                        const wantsToDownload = confirm(
                            "Sembra che tu non abbia l'app di Spotify installata.\n\n" +
                            "Clicca OK per scaricarla e scoprire la playlist completa!\n\n" +
                            "(Altrimenti premi 'Annulla' per rimanere qui e usare il tasto 'Apri via Web')"
                        );

                        if (wantsToDownload) {
                            window.location.href = "https://www.spotify.com/download";
                        }
                    }
                }, 2000);
            });
        }

        if (btnWeb) {
            btnWeb.href = webLink;
            btnWeb.target = "_blank";
        }
        
    } else {
        container.innerHTML = "<p style='color:white;'>Nessuna canzone specificata nel codice.</p>";
        if (btnApp) btnApp.style.display = 'none';
        if (btnWeb) btnWeb.style.display = 'none';
    }
});