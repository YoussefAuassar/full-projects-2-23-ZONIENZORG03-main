"use strict";
function createInschrijving(
  voornaam,
  naam,
  email,
  activiteit,
  betaalmethode,
  extraVervoer
) {
  console.log(voornaam.innerHTML, "innerhtml");
  console.log("Hello world!");
  console.log(voornaam.innerText, "innertext");
  //  http://10.2.95.48
}

let voornaam = document.getElementById("voornaam");
let naam = document.getElementById("achternaam");
let email = document.getElementById("email");
let activiteit = document.getElementById("selectie");
let betaalmethode = document.getElementById("betaalmethode");
let extraVervoerJa = document.getElementById("vervoer-ja");
let extraVervoerNee = document.getElementById("vervoer-nee");
let extraVervoer = false;
const button = document.getElementById("schrijfInBtn");

button.addEventListener("click", (event) => {
  const url =
    "http://10.2.95.48/api/collections/inschrijvingenActiviteiten/records";
  let data = {
    achternaam: naam.value,
    activiteit: activiteit.value,
    betaalmethode: betaalmethode.value,
    collectionId: "813u90k6vjgghrg",
    collectionName: "InschrijvingenActiviteiten",
    created: "2023-06-21 09:29:20.520Z",
    email: email.value,
    extraVervoer: false,
    id: "",
    updated: "2023-06-21 09:29:20.520Z",
    voornaam: voornaam.value,
  };
  console.log(data);
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      achternaam: data.achternaam,
      activiteit: data.activiteit,
      betaalmethode: data.betaalmethode,
      collectionId: "813u90k6vjgghrg",
      collectionName: "InschrijvingenActiviteiten",
      created: "2023-06-21 09:29:20.520Z",
      email: data.email,
      extraVervoer: data.extraVervoer,
      id: "",
      updated: "2023-06-21 09:29:20.520Z",
      voornaam: data.voornaam,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      // Handle the response data
      console.log(data);
    })
    .catch((error) => {
      // Handle any errors
      console.error("Error:", error);
    });

  createInschrijving(
    voornaam,
    naam,
    email,
    activiteit,
    betaalmethode,
    extraVervoer
  );
});
