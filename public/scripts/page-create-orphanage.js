// create map
const map = L.map('mapid').setView([-5.0853837,-42.8092381], 13); //setView([lat, long],zoom)

// create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// create icon
const icon = L.icon({
    iconUrl:"./public/assets/map-marker.svg",
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

