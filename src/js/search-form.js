const from = document.createElement('form')
export const query = document.createElement('input')
export const btn = document.createElement('input')

from.setAttribute('action', '#')

query.id="search"
query.setAttribute('placeholder', 'Type something...')
query.setAttribute('value', 'little big')
query.setAttribute('autocomplete', 'off')
query.className = "input-text-search"

btn.id="btn-sumbit"
btn.setAttribute('type', 'submit')
btn.setAttribute('value', 'Search')
btn.className = "input-btn-search"
btn.disabled = 'true'

from.appendChild(query)
from.appendChild(btn)
document.body.appendChild(from)