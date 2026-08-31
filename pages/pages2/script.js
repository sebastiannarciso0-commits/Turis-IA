// Crear el mapa
var map = L.map('map').setView([-11.915, -76.525], 16);

// Cargar OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap'
}).addTo(map);

// Marcador de Chucuncuya
L.marker([-11.915, -76.525]).addTo(map)
.bindPopup(`
    <h3>🏛️ Complejo Arqueológico de Chucuncuya</h3>

    <p>
        Uno de los principales atractivos turísticos del distrito de
        San Bartolomé, Huarochirí.
    </p>

    <p>
        Este sitio conserva importantes vestigios arqueológicos
        prehispánicos rodeados por un hermoso paisaje andino.
    </p>

    <button onclick="window.location.href='pages3/chucuncuya.html'">
        Ver más
    </button>
`)
.openPopup();
var iconoChucuncuya = L.icon({
    iconUrl: "../imga/aea.jpg",
    iconSize: [45,45],
    iconAnchor: [22,45],
    popupAnchor: [0,-40]
});

L.marker([-11.915, -76.525],{
    icon: iconoChucuncuya
}).addTo(map);