function createMap(electricvehicles) {

 let streetmap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});


 let baseMaps = {
    "Street Map": streetmap
  };

  let overlayMaps = {
    "Electric Vehicle": electricvehicles
  };

  // Create the map object with options.
  let map = L.map("map-id", {
    center: [-122.37815, 47.66866],
    zoom: 15,
    layers: [streetmap, electricvehicles]
  });

  // Create a layer control, and pass it baseMaps and overlayMaps. Add the layer control to the map.
  L.control.layers(baseMaps, overlayMaps, {
    collapsed: false
  }).addTo(map);
}

function createMarkers(response) {