async function getProphetData() {
    const response = await fetch(urlS);
    const data = await response.json();
    //console.table(data.members);
    displayProphets(data.members);
}

const urlS = "https://spacesettler.github.io/wdd230/chamber/data/memeber.json";
const cards = document.querySelector('#cards');
let amount = 0;
let amount1 = 0;
const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        if (prophet.level > 1) {
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

            let selector = Math.round(Math.random());
            if (amount1 != 3) {
                if (amount > 0 || selector === 1) {
                    cards.appendChild(card);
                    amount1++;
                }
                if (selector === 0) {
                    amount++;
                }
            }
        }
    })
}

getProphetData();