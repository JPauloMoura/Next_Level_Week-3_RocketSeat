
// create map
const map = L.map('mapid').setView([-5.0853837,-42.8092381], 13); //setView([lat, long],zoom)

// create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// create icon
const icon = L.icon({
    iconUrl:"/assets/map-marker.svg",
    iconSize:[58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2] //popupAnchor
})

const addMarker = ({id, name, lat, lng}) => {
    
    //create ṕopup overlay
    const popup = L.popup({
        closeButton:false,
        className: 'map-popup',
        minWidth: 240,
        minHeight: 240
    }).setContent(`${name} 
        <a href="/orphanage?id=${id}"> 
            <img src="/assets/arrow-white.svg">
        </a>`)

    L.marker([lat, lng], {icon})
    .addTo(map)
    .bindPopup(popup)
}

const orphanagesSpan = document.querySelectorAll(".orphanages span")

orphanagesSpan.forEach((span) => {
    const orphanage = {
        id: span.dataset.id,
        name: span.dataset.name,
        lat: span.dataset.lat,
        lng: span.dataset.lng
    }
    addMarker(orphanage)
})


