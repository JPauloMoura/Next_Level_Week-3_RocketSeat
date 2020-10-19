// create map
const map = L.map('mapid').setView([-5.0853837,-42.8092381], 13); //setView([lat, long],zoom)

// create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// create icon
const icon = L.icon({
    iconUrl:"/assets/map-marker.svg",
    iconSize:[58, 68],
    iconAnchor: [29, 68],
})

let marker

// create and add marker
map.on('click', (event)=> {
    const lat = event.latlng.lat
    const lng = event.latlng.lng

    document.querySelector('[name=lat]').value = lat
    document.querySelector('[name=lng]').value = lng

    // remove marker
    marker && map.removeLayer(marker)

    // add icon layer
    marker = L.marker([lat, lng],{icon})
    .addTo(map)
})

//adicionar o campo de fotos
const addPhotoField = () => {
    const container = document.querySelector('#images')
    const fieldsContainer = document.querySelectorAll('.new-upload')
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)
    const input = newFieldContainer.children[0]

    if(input.value.trim() === '') return

    input.value = ''
    container.appendChild(newFieldContainer)
}

const deleteField = (event) => {
    const span = event.currentTarget
    const fieldsContainer = document.querySelectorAll('.new-upload')

    if(fieldsContainer.length < 2){
        span.parentNode.children[0].value = ""
        return
    }

    span.parentNode.remove()
}

const toggleSelect = (event) => {
    document.querySelectorAll('.button-select button')
    .forEach((button) => button.classList.remove('active'))

    const button = event.currentTarget
    button.classList.add('active')

    const input = document.querySelector('[name="open-on-weekends]')
    input.value = button.dataset.value
}

