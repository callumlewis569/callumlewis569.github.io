let map;

async function initMap() {
  // The location of Paintworx Automotive Repairs.
  const position = { lat: 53.19855666818216, lng: -2.9968722275979696 };

  // Import Google Maps library.
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  // Creates the map centred on Paintworx.
  map = new Map(document.getElementById("map"), {
    zoom: 18,
    center: position,
    mapId: "paintworx-map",
  });

  // Creates a marker centred on Paintworx.
  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: "Paintworx Automotive Repairs",
  });
}

initMap();
