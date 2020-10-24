let button = document.getElementById("button");
let name = document.getElementById("name");
let height = document.getElementById("height");
let gender = document.getElementById("gender");
let birth = document.getElementById("birth");
let homeWorld = document.getElementById("homeWorld");

let xhr = new XMLHttpRequest();

function getPerson() {
    updateLoading();
    let randomNum = Math.floor(Math.random() * 85);
    let apiUrl = `https://swapi.dev/api/people/${randomNum}/`;
    xhr.open(`GET`, apiUrl);
    xhr.responseType = `json`;
    xhr.send();
    xhr.onload = function() {
      if (xhr.status != 200){
        console.log(`Error: ${xhr.status}: ${xhr.statusText}`);
        updateInfoError();
        console.log(`Sorry but We encounter an error`);
      }  else {updateInfo(xhr.response)}
    }
    xhr.onerror = () => {
        updateInfoError();
        console.log(`Sorry but We encounter an error`);
    };
}

function updateInfo(resp) {
    console.log(resp);
    let url = new URL(resp.homeworld);
    url.protocol = `https:`;
    xhr.open(`GET`, url.href);
    xhr.responseType = `json`;
    xhr.send();
    xhr.onload = function() {
        if(xhr.status != 200) {
            console.log(`There is a problem in the coordinates of the planet`);
        } 
        else {updateInfoHW(xhr.response)}     
    }
    xhr.onerror = () => {
        console.log(`Maybe the Empire blew this planet?`);
    };
    console.log(resp.homeworld);
    console.log(resp.name);
    console.log(name);
    name.innerText = resp.name;
    height.innerText = `Heigt: ${resp.height}`;
    gender.innerText = `Gender: ${resp.gender}`;
    birth.innerText = `Birth Year: ${resp.birth_year}`;
}

function updateInfoHW(re) {
    homeWorld.innerText = `Home World: ${re.name}`
}

function updateInfoError() {
    name.innerText = `Oh No! That person couldn't join us!`;
    height.innerText = ``;
    gender.innerText = ``;
    birth.innerText = ``;
}

function updateLoading() {
    name.innerHTML = `<i class="fas fa-spinner fa-pulse fa-1x"></i> <p>Loading...</p>`;
    height.innerText = ``;
    gender.innerText = ``;
    birth.innerText = ``;
}
