const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('#navigation');
const banButton = document.querySelector('#bannerBut');
const banner = document.querySelector('#banner');
const today = new Date();
let day = today.getDay()

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open')
    hamButton.classList.toggle('open')
});
banButton.addEventListener('click', () => {
    banner.classList.toggle('open')
});

if (day === 3 || day === 2 || day === 1) {
    banner.classList.toggle('close');
} else {
    banner.classList.toggle('open');
}

