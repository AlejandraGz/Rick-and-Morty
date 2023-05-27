const api = "https://rickandmortyapi.com/api/character";

const getData = (url) => {
  fetch(url)
    .then((response) => response.json())
    .then((json) => {
      fillData(json);
    })
    .catch((error) => {
      console.log("Error", error)
    })
};

const fillData = (jsonData) => {
  let htmlCards = "";
  console.log(jsonData);
  let i = 0;
  jsonData.results.forEach(e => {
    console.log(i++)
    htmlCards += "<div class='col>";
    htmlCards += "<div class='card my-3' style='max-width: 540px;'>";
    htmlCards += "<div class='row g-0'>";
    htmlCards += "<div class='col-md-4'>";
    htmlCards += `<img src="${e.image}" class="img-fluid rounded-start" alt="...">`;
    htmlCards += '</div>'
    htmlCards += '<div class="col-md-8">'
    htmlCards += '<div class="card-body" style="background-color: #505155; height: 194px">'
    htmlCards += `<h5 class="card-title">${e.name}</h5>`
    htmlCards += `<h5 class="card-text">${e.status} - ${e.species}</h5>`
    htmlCards += `<h5 class="card-text">${e.gender}</h5>`
    htmlCards += `<h6 class="card-text">Last known location:</h6>`
    htmlCards += `<h5 class="card-text">${e.location.name}</h5>`
    htmlCards += '</div></div></div></div></div>'
  });
  document.getElementById('cardsFromApi').innerHTML = htmlCards;
}

function onInit(){
  getData(api);
}