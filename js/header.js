const menuDerecho = document.querySelector('.menu-derecho-container');
const menuIzquierdo = document.querySelector('.menu-izquierdo-container');
const botonMenu = document.querySelector('.menu-icon');
const closeButton = document.querySelector('.close-icon');

botonMenu.addEventListener('click', () => {
    menuDerecho.classList.toggle('mostrar');
    menuIzquierdo.classList.toggle('mostrar');
});

closeButton.addEventListener('click', () => {
    menuDerecho.classList.toggle('mostrar');
    menuIzquierdo.classList.toggle('mostrar');
});