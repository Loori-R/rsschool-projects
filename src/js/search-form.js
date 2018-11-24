    const form = document.createElement('form')
    form.innerHTML = `<form action="#">
    <input type="text" id="search" placeholder="Type something..." autocomplete="off" class="input-text-search" autofocus>
    <input id="btn-sumbit" type="submit" value="Search" class="input-btn-search">
        </form>`    
    document.body.appendChild(form)