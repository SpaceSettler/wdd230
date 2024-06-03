const baseURL = "https://spacesettler.github.io/wdd230/";
const linksURL = "https://spacesettler.github.io/wdd230/data/links.json";

async function apiFetch() {
    try {
        const response = await fetch(baseURL);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();