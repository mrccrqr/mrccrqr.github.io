fetch('/library/getOauthInfo', {
    credentials: 'include'
})
.then(function (r) {
    return r.json();
})
.then(function (data) {
    alert(data.oauthInfo.oa2);
})
.catch(function (e) {
   class alert('Error: ' + e);
});
