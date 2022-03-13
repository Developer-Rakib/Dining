// nav button handle 
let toggle = document.querySelector('.toggle');
let nav = document.querySelector('.nav');
document.querySelector('.toggle-parent').addEventListener('click', () => {
    console.log('clck');
    nav.classList.toggle('open');
    toggle.classList.toggle('active');
})