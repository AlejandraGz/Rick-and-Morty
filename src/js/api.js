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
    htmlCards += "<div class='col col-5 mt-1'style='max-width: 700px; padding: 0px'> ";
    htmlCards += "<div class='card my-3' style='max-width: 700px;'>";
    htmlCards += "<div class='row g-0'>";
    htmlCards += "<div class='col-md-4'>";
    htmlCards += `<img src="${e.image}" class="img-fluid rounded-start" alt="imagen de ${e.name}" style='height: 100%; padding: 0px''>`;
    htmlCards += '</div>'
    htmlCards += '<div class="col-md-8">'
    htmlCards += '<div class="card-body pe-2" style="background-color: #505155; height: 100%; border-top-right-radius:5px ; border-bottom-right-radius:5px ;">'
    htmlCards += `<h5 class="card-title text-white fs-2 text fw-bold">${e.name}</h5>`
    htmlCards += `<h5 class="card-text text-white fs-5 fw-bold">${e.status} - ${e.species}</h5>`
    htmlCards += `<h5 class="card-text text-white fs-5 fw-light">${e.gender}</h5>`
    htmlCards += `<h6 class="card-text text-white-50 fs-6">Last known location:</h6>`
    htmlCards += `<h5 class="card-text text-white fs-5 fw-light">${e.location.name}</h5>`
    htmlCards += '</div></div></div></div></div>'
  });
  document.getElementById('cardsFromApi').innerHTML = htmlCards;
}

function onInit(){
  getData(api);
}

function newImage() {
  document.querySelector('#github').classList.add('d-none');
  document.querySelector('#githubHovered').classList.remove('d-none');

}
function oldImage()
{
  document.querySelector('#github').classList.remove('d-none');
  document.querySelector('#githubHovered').classList.add('d-none');

}