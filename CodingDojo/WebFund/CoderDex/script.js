var userName = "";

function getUsername(element) {
    // console.log(element.value);
    userName = element.value;
}

var cardsDiv = document.querySelector("#cards");

async function search(data) {
    var response = await fetch("https://api.github.com/users/" + userName);
    var coderData = await response.json();
    var message = coderData.message;
    if (message=='Not Found'){
        console.log(coderData);
    }
    else {
        cardsDiv.innerHTML = makeCoderCard(coderData) + cardsDiv.innerHTML;
        console.log(coderData);
    }
}

function makeCoderCard(data) {
    var res = `<div class="card">
                <img src="${data.avatar_url}" alt="${data.login}">
                <div class="info">
                    <h3>login : ${data.login}</h3>
                    <h3>name : ${data.name}</h3>
                    <p>location : ${data.location}</p>
                    <p>public repos : ${data.public_repos}</p>
                    <a href="${data.html_url}">${data.html_url}</a>
                </div>
              </div>`
    return res;
}