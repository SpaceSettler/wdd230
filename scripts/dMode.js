const dMode = document.querySelector('#dMode');
const main = document.querySelector('main');
dMode.addEventListener('click', () => {
    if (dMode.textContent.includes("Night")) {
        main.style.backgroundColor = 'black';
        main.style.color = "white";
        dMode.textContent = "Day";
    }
    else {
        main.style.backgroundColor = 'white';
        main.style.color = "black";
        dMode.textContent = "Night";
    }
})