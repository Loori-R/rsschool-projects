import{btn} from './search-form.js';
export function init() {
    gapi.client.setApiKey('AIzaSyDVdE4LwpceNaEd3UTHg4ESHrBjnWwne_E');
    gapi.client.load("youtube", "v3", function () {
        btn.disabled = false
    });
}