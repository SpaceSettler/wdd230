const url = "https://spacesettler.github.io/wdd230/chamber/data/memeber.json";
const cards = document.querySelector('#cards');
async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data.members);
    displayProphets(data.members);
}
const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        let card = document.createElement('section');
        let fullName = document.createElement('p');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let website = document.createElement('p');
        let portrait = document.createElement('img');

        fullName.textContent = prophet.name;
        address.textContent = prophet.address;
        phone.textContent = `Place of Birth: ${prophet.phone}`
        website.textContent = prophet.website;
        portrait.setAttribute('src', prophet.icon);
        portrait.setAttribute('alt', `Portrait for ${prophet.name}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        card.appendChild(fullName);
        card.appendChild(portrait);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);
        cards.appendChild(card);
    });
}

getProphetData();