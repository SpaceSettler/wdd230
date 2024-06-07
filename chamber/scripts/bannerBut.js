const d = new Date();
let day = d.getDay()
banButton.addEventListener('click', () => {
    banner.classList.toggle('open')
});

if (day === 3 || day === 2 || day === 1) {
    banner.classList.toggle('close');
} else {
    banner.classList.toggle('open');
}
