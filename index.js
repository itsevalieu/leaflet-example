let mapView = L.map('map').setView([34.068726, -118.010448], 14);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
 	maxZoom: 20,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mapView);

let locations = [
    {
        coordinate: [34.152960, -118.149685],
        message: '34.152960, -118.149685'
    },
    {
        coordinate: [34.068726, -118.010448],
        message: '34.068726, -118.010448'
    },
    {
        coordinate: [34.087505, -118.148492],
        message: '34.087505, -118.148492'
    }
]
locations.forEach(function(location){
    let marker = L.marker(location.coordinate).addTo(mapView).bindPopup(location.message);
});

let popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent('Ya clicked me at ' + e.latlng.toString())
        .openOn(mapView);
} 

mapView.on('click', onMapClick);

let circle = L.circle([34.068726, -118.010448], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(mapView);

var polygon = L.polygon([
    [34.068726, -118.010448],
    [34.152960, -118.149685],
    [34.087505, -118.148492]
]).addTo(mapView);

//panning