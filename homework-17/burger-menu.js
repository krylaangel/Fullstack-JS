const burgerButton = document.getElementById('burgerButton');
const mobileMenu = document.getElementById('mobileMenu');

burgerButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});