let menu = document.querySelector('#menu-bar');
let navBar = document.querySelector('.navbar');
window.onscroll = () => {
    menu.classList.remove('fa-times');
    navBar.classList.remove('active');
}
menu.addEventListener('click', () => {
    menu.classList.toggle('fa-times');
    navBar.classList.toggle('active');
});

