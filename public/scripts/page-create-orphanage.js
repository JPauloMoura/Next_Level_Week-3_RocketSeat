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


