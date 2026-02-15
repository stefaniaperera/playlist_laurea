document.addEventListener("DOMContentLoaded", () => {
    
    const params = new URLSearchParams(window.location.search);
    const trackId = params.get('id');
    const container = document.getElementById('embed-container');

    if (trackId) {
        const iframeHtml = `
            <iframe 
                style="border-radius:12px" 
                src="https://open.spotify.com/embed/track/${trackId}?utm_source=generator&theme=0" 
                width="100%" 
                
                /* TORNATO AL GRANDE */
                height="352" 
                
                frameBorder="0" 
                sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation allow-popups-to-escape-sandbox"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                loading="lazy">
            </iframe>
        `;
        
        container.innerHTML = iframeHtml;
        container.classList.remove('loading');
        
    } else {
        container.innerHTML = "<p>Errore: Nessuna canzone specificata.</p>";
    }
});