var map = L.map('mapP1').setView([51.226674, 4.425532], 15);

L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

var bounds = [
  [51.2263, 4.4251], 
  [51.2269, 4.4260]  
];

L.rectangle(bounds, {
  color: '#e60005',     
  weight: 2
}).addTo(map);

L.marker([51.226674, 4.425532]).addTo(map)
  .bindPopup('Mijn gemeente')
  .openPopup();