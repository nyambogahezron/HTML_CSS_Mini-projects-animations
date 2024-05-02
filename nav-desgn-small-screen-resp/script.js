

let menu = document.querySelector('.toggle_btn');
let navBar = document.querySelector('.dropdown_menu');
let icon = document.querySelector('.toggle_btn i');

menu.addEventListener('click', () => {
    menu.classList.toggle('open');
    navBar.classList.toggle('open');

   
});

