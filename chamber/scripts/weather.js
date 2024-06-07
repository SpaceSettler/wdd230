const currentTemp = document.querySelector('#current-temp');
const forecastTemp1 = document.querySelector('#forecast-temp1');
const forecastTemp2 = document.querySelector('#forecast-temp2');
const forecastTemp3 = document.querySelector('#forecast-temp3');
const captionDesc = document.querySelector('#figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=0&lon=-0&units=imperial&appid=d4e87b33630ecd54d46bb11d225de0e9';
const urlF = 'https://api.openweathermap.org/data/2.5/forecast?lat=0&lon=-0&units=imperial&appid=d4e87b33630ecd54d46bb11d225de0e9';
async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            //console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}
function displayResults(data) {
    currentTemp.innerHTML = `${data["main"]["temp"]}&deg;F`;
    captionDesc.textContent = data.weather[0].description;
}
apiFetch();
async function apiFetchF() {
    try {
        const response = await fetch(urlF);
        if (response.ok) {
            const data = await response.json();
            //console.log(data);
            displayResultsF(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}
function displayResultsF(data) {
    forecastTemp1.innerHTML = `${data.list[0].main.temp}&deg;F`;
    forecastTemp2.innerHTML = `${data.list[8].main.temp}&deg;F`;
    forecastTemp3.innerHTML = `${data.list[16].main.temp}&deg;F`;
}
apiFetchF();