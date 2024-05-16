const msToDays = 84600000;
const today = new Date();
const lastDay = parseFloat(localStorage.getItem('lastDay')) || 0;
let visit = localStorage.getItem('timesVisited') || 0;
const daysBetween = Math.round(today / msToDays - lastDay);
let daysOutput = document.querySelector('#days')

visit++;
localStorage.setItem('timesVisited', visit);
localStorage.setItem('lastDay', (today / msToDays));

if (daysBetween !== 0) {
    let amountDays = 'days';
    if (daysBetween === 1) {
        amountDays = 'day';
    }
    daysOutput.textContent = 'You visited ' + daysBetween + ' ' + amountDays + ' ago.';
} else if (visit === 1) {
    daysOutput.textContent = "Welcome! Feel free to look around and see what we're all about"
} else {
    daysOutput.textContent = "Back so soon?"
}