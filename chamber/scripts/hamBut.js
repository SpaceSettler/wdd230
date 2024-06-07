const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('#navigation');
const banButton = document.querySelector('#bannerBut');
const banner = document.querySelector('#banner');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open')
    hamButton.classList.toggle('open')
});

