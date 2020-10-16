const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false,
}


// create map
const map = L.map('mapid', options).setView([-5.0853837,-42.8092381], 13); //setView([lat, long],zoom)

// create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// create icon
const icon = L.icon({
    iconUrl:"/assets/map-marker.svg",
    iconSize:[58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2] 
})

L.marker([-5.0853837,-42.8092381], {icon})
.addTo(map)


// image gallery

const selectImage = (event) =>{
    const button = event.currentTarget //pesquisar uso

    //remover todas as classes .active
    const buttons = document.querySelectorAll(".images button")
    buttons.forEach((button)=>{
        button.classList.remove('active');
    })

    //selecionar a image clicada
    const image = button.children[0]
    const imageContainer = document.querySelector('.orphanage-details > img')

    // atualizar o container de image
    imageContainer.src = image.src

    // adicionar a classe .active para este botao
    button.classList.add('active')

} 