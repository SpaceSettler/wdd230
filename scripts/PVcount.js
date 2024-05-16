const visit = document.querySelector('#pCisit');
let count = Number(window.localStorage.getItem("count")) || 0;

if (count !== 0) {
    visit.textContent = count;
} else {
    visit.textContent = "Welcome!"
}

count++;
localStorage.setItem('count', count);