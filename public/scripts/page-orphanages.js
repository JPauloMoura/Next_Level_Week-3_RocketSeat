// create map
const map = L.map('mapid').setView([-5.0853837,-42.8092381], 13); //setView([lat, long],zoom)

// create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// create icon
const icon = L.icon({
    iconUrl:"./public/assets/map-marker.svg",
    iconSize:[58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2] //popupAnchor
})

//create ṕopup overlay
const popup = L.popup({
    closeButton:false,
    className: 'map-popup',
    minWidth: 240,
    minHeight: 240
}).setContent(`Lar das meninas 
    <a href="orphanage.html?id=1" class="choose-orphanage">
        <img src="./public/assets/arrow-white.svg">
    </a>`
)

L.marker([-5.0853837,-42.8092381], {icon})
.addTo(map)
.bindPopup(popup)
