let streetmap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});

let layers = {
    Tesla: new L.LayerGroup(),
    Nissan: new L.LayerGroup(),
    Chevrolet: new L.LayerGroup(),
    Ford: new L.LayerGroup(),
    BMW: new L.LayerGroup(),
  };

  let map = L.map("map-id", {
    center: [-122.37815, 47.66866],
    zoom: 12,
    layers: [
      layers.Tesla,
      layers.Nissan,
      layers.Chevrolet,
      layers.Ford,
      layers.BMW
    ]
  });

  streetmap.addTo(map);

  let overlays = {
    "Tesla": layers.Tesla,
    "Nissan": layers.Nissan,
    "Chevrolet": layers.Chevrolet,
    "Ford": layers.Ford,
    "BMW": layers.BMW
  };

  L.control.layers(null, overlays).addTo(map);

  let info = L.control({
    position: "bottomright"
  });

  info.onAdd = function() {
    let div = L.DomUtil.create("div", "legend");
    return div;
  };
  
  info.addTo(map);

  let icons = {
    Tesla: L.ExtraMarkers.icon({
      icon: "ion-settings",
      iconColor: "white",
      markerColor: "yellow",
      shape: "star"
    }),
    Nissan: L.ExtraMarkers.icon({
      icon: "ion-android-bicycle",
      iconColor: "white",
      markerColor: "red",
      shape: "circle"
    }),
    Chevrolet: L.ExtraMarkers.icon({
      icon: "ion-minus-circled",
      iconColor: "white",
      markerColor: "blue-dark",
      shape: "penta"
    }),
    Ford: L.ExtraMarkers.icon({
      icon: "ion-android-bicycle",
      iconColor: "white",
      markerColor: "orange",
      shape: "circle"
    }),
    BMW: L.ExtraMarkers.icon({
      icon: "ion-android-bicycle",
      iconColor: "white",
      markerColor: "green",
      shape: "circle"
    })
  };
  

  d3.csv("C:/Users/djgoo/DataAnalysis/Project-3/EV Population Data/Electric_Vehicle_Population_Data.csv")

  