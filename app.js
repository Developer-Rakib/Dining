// nav button handle 
let toggle = document.querySelector('.toggle');
let nav = document.querySelector('.nav');
let navBar = document.querySelector('#navBar');
document.querySelector('.toggle-parent').addEventListener('click', () => {
    nav.classList.toggle('open');
    navBar.classList.toggle('navbar-show');
    toggle.classList.toggle('active');

})