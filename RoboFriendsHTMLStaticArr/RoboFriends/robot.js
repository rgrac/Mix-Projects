const root = document.getElementById(`root`)
function createRobot() {
    for (x in robots) {
        let div = document.createElement(`div`);
        let img = document.createElement(`img`);
        let name = document.createElement(`h2`);
        let email = document.createElement(`p`);
        let username = document.createElement(`h4`);

        img.setAttribute (`src`, robots[x].image);
        img.classList.add(`border`);
        name.innerText = robots[x].name;
        name.classList.add(`textBorder`);
        email.innerText = robots[x].email;
        email.classList.add(`textBorder`);
        username.innerText = robots[x].username;
        username.classList.add(`textBorder`);
        div.appendChild(img);
        div.appendChild(name);
        div.appendChild(email);
        div.appendChild(username);
        root.appendChild(div);
        div.classList.add("generalDiv");        
    }
}
const input = document.getElementById("search");
input.addEventListener("keyup", (e) => {
    let inputSearch = e.target.value.toLowerCase();
    let divsSearch = document.getElementsByClassName("generalDiv")
    let newArray = Array.from(divsSearch);
    // console.log(newArray)
        newArray.forEach((divSearch) => {
            let name = divSearch.children[1].innerText;
            console.log(newArray)
            if(name.toLowerCase().includes(inputSearch)) {
                divSearch.style.display = "block"
            } else {
                divSearch.style.display = "none"}
    });
})