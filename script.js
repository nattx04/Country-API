"use strict";
const countries = document.querySelector(".countries");
const getCountry = function (country) {
  const req = new XMLHttpRequest();
  req.open("GET", `https://restcountries.com/v3.1/name/${country}`);
  req.send();

  req.addEventListener("load", function () {
    const [data] = JSON.parse(req.responseText);
    const lang = Object.entries(data.languages);
    const currency = Object.entries(data.currencies);
    if (data.borders == undefined) {
      data.borders = "-";
    }

    const html = `<article class="country">
  <img src=${data.flags.png} alt="" class="country__img" />
  <div class="country__data"><h3 class="country__name">${data.name.common}</h3>
  <h4 class="country__region">${data.region}</h4>
  <p class="country__row"><span>🌐</span>${lang[0][1]}</p>
  <p class="country__row"><span>💰</span>${currency[0][1].name} (${currency[0][1].symbol})</p>
  <p class="country__row"><span>🧑</span>${data.population}</p>
  <p class="country__row"><span>🏴󠁳󠁡󠀰󠀸󠁿</span>${data.borders}</p>
  <p class="country__row"><span>🏛️</span>${data.capital}</p>
  </div></article>`;
    countries.insertAdjacentHTML("beforeend", html);
    countries.style.opacity = 1;
  });
};

const SC = function () {
  const Input = document.getElementById("Input").value;
  console.log(Input);

  if (Input !== "" && Input !== getCountry()) {
    countries.innerHTML = "";
    getCountry(Input);
  }

};

getCountry("Thailand");
getCountry("Japan");
getCountry("USA");
