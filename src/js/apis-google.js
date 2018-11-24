module.exports = function load_api_client() {
    const script = document.createElement('script');
    script.src = "https://apis.google.com/js/client.js?onload=init"
    document.body.appendChild(script);
}
