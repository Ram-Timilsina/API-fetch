const URL = "https://bored.api.lewagon.com/api/activity";
const factpara = document.querySelector("#fact");
const actives = document.querySelector("#active");
const typo = document.querySelector("#types");
const participanti = document.querySelector("#participant");
const priced = document.querySelector("#prices");
const linker = document.querySelector("#linkes");
const ken = document.querySelector("#keys");
const acce = document.querySelector("#access");
const getFacts = async () => {
  console.log("getting data...");
  let response = await fetch(URL);
  console.log(response);
  let data = await response.json();
  //   factpara.innerText = data[1].Text;
  actives.innerText = data.activity;
  typo.innerText = data.type;
  participanti.innerText = data.participants;
  priced.innerText = data.price;
  linker.innerText = data.link || "N/A";
  linker.setAttribute("href", data.link);

  ken.innerText = data.key;
  acce.innerText = data.accessibility;
};

getFacts();
