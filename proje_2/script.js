const navButton = document.querySelector('.navbarButton');
const navbar = document.querySelector('nav');

navButton.addEventListener('click', () => {

    navbar.classList.toggle('hide-navbar')
})