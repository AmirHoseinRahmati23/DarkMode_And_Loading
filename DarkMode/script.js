let isLight = true;
let body = document.querySelector('body');
let button = document.querySelector('#color-changer');
button.addEventListener('click', () => {
    body.className = (isLight)? "dark": "light";
    isLight = !isLight;
});