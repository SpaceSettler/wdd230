const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
let input = new Date().toLocaleDateString(options);
document.getElementById('year').textContent = input;
input = input.slice(-4);
document.getElementById('copy').textContent = input;