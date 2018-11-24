function auth() {
    gapi.client.setApiKey('AIzaSyDVdE4LwpceNaEd3UTHg4ESHrBjnWwne_E');
    gapi.client.load("youtube", "v3", function () {
    });
}