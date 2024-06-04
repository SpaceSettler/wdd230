async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data.members);
    displayProphets(data.members);
}
function showList() {
    cards.classList.add("list");
    cards.classList.remove("grid");
}
function hideList() {
    cards.classList.add("grid");
    cards.classList.remove("list");
}

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const url = "https://spacesettler.github.io/wdd230/chamber/data/memeber.json";
const cards = document.querySelector('#cards');
const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        let card = document.createElement('section');
        let fullName = document.createElement('span');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let website = document.createElement('a');
        let portrait = document.createElement('img');

        fullName.textContent = prophet.name;
        address.textContent = prophet.address;
        phone.textContent = prophet.phone;
        website.innerHTML = `<p id="true">${prophet.webName}</p><p id="false">${prophet.webNameAlt}</p>`;
        website.setAttribute('href', prophet.website);
        portrait.setAttribute('src', prophet.icon);
        portrait.setAttribute('alt', `Portrait for ${prophet.name}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '200');
        portrait.setAttribute('height', '200');

        card.appendChild(fullName);
        card.appendChild(portrait);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);
        cards.appendChild(card);
    });
}

getProphetData();
gridbutton.addEventListener("click", hideList);
listbutton.addEventListener("click", showList);