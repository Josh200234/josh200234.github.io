let menu = document.querySelctor('#menu-bar i');
let navbar = document.querySelctor('.navbar');

menu.onclick =  () =>{

    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () => {

    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

function loader(){
    document.querySelector('.loader-container').classList.add('fade-out');
}

function fadOut(){
    setInterval(loader, 3000);
}

window.onload = fadeOut();