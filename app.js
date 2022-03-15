// select element 
let emailField = document.getElementById("email-field");
let emailBtn = document.getElementById("email-btn");


// nav button handle 
let toggle = document.querySelector('.toggle');
let nav = document.querySelector('.nav');
let navBar = document.querySelector('#navBar');
document.getElementById('nav-container').addEventListener('click', () => {
    nav.classList.toggle('open');
    navBar.classList.toggle('navbar-show');
    toggle.classList.toggle('active');
})

// email validation 
let emailPattern = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
emailField.addEventListener("keyup", () => {
    if (emailPattern.test(emailField.value)) {
        emailBtn.removeAttribute("disabled");
        emailBtn.style.background = "#e81922";
    } else {
        emailBtn.setAttribute("disabled", true);
        emailBtn.style.background = "#500a0d";
    }
})