// nav button handle 
let toggle = document.querySelector('.toggle');
let nav = document.querySelector('.nav');
let navBar = document.querySelector('#navBar');
console.log(navBar);
document.querySelector('.toggle-parent').addEventListener('click', () => {
    console.log('clck');
    nav.classList.toggle('open');
    navBar.classList.toggle('navbar-show');
    toggle.classList.toggle('active');

})