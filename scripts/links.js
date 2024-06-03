const baseURL = "https://spacesettler.github.io/wdd230/";
const linksURL = "https://spacesettler.github.io/wdd230/data/links.json";
const cards = document.querySelector('#cards');

async function apiFetch() {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data);
    displayLinks(data.weeks);
}
const displayLinks = (links) => {
    let week = 0;
    links.forEach((prophet) => {
        week++;
        let card = document.createElement('li');
        try {
            card.innerHTML = `Week ${week}:<a href="${prophet.links[0].url}">${prophet.links[0].title}</a> | <a href="${prophet.links[1].url}">${prophet.links[1].title}</a> | <a href="${prophet.links[2].url}">${prophet.links[2].title}</a> | <a href="${prophet.links[3].url}">${prophet.links[3].title}</a>`;
        } catch {
                card.innerHTML = `Week ${week}:<a href="${prophet.links[0].url}">${prophet.links[0].title}</a> | <a href="${prophet.links[1].url}">${prophet.links[1].title}</a> | <a href="${prophet.links[2].url}">${prophet.links[2].title}</a>`;
        }
                cards.appendChild(card);
    });
}

apiFetch();