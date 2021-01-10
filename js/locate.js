const mymap = L.map("mapid").setView([0, 0], 1);

const myIcon = L.icon({
  iconUrl: "img/iss.png",
  iconSize: [65, 50],
});

const mapMarker = L.marker([0, 0], { icon: myIcon }).addTo(mymap);

L.tileLayer(
  "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
  {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: "mapbox/streets-v11",
    tileSize: 512,
    zoomOffset: -1,
    accessToken:
      "pk.eyJ1IjoidHJvbmRlcmlrbGFyc2VuIiwiYSI6ImNrYTRiczZxbzBzcjMzZHAwbmF4dnppbGsifQ.v916lJqo5DFFUXwbXc3lRg",
  }
).addTo(mymap);

fetch("https://api.wheretheiss.at/v1/satellites/25544")
  .then(function (response) {
    return response.json();
  })
  .then(function (json) {
    showISS(json);
  })
  .catch(function (error) {
    console.log(error);
  });

function showISS(json) {
  const lat = json.latitude;
  const lon = json.longitude;

  mymap.setView([lat, lon], 2);
  mapMarker.setLatLng([lat, lon]);
}
