let map;

function initMap() {
  const paintworx = { lat: 53.198587742077436, lng: -2.996948270570656 };
  const mapOptions = {
    zoom: 18,
    center: paintworx,
    mapTypeId: 'roadmap'
  };
  map = new google.maps.Map(document.getElementById("location"), mapOptions);
  const marker = new google.maps.Marker({
    position: paintworx,
    map: map,
    title: "Paintworx Automotive Repairs" // add a title to the marker
  });
}

window.initMap = initMap;

const x = document.getElementById("mobileMenu");
const y = document.getElementById("menu");

y.addEventListener("click", function() {
  x.classList.toggle("show")
})