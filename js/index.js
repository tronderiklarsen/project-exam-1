fetch("https://api.wheretheiss.at/v1/satellites/25544")
  .then(function (response) {
    return response.json();
  })
  .then(function (json) {
    createCoords(json);
  })
  .catch(function (error) {
    console.log(error);
  });

function createCoords(json) {
  const coordsContainer = document.querySelector(".p-container");

  let html = "";

  html += `<p>The international space station is currently over ${json.latitude.toFixed(2)}° N, ${json.longitude.toFixed(2)}° E. But where is that you say? Click on the button below to find out!</p>`;

  coordsContainer.innerHTML = html;
}
