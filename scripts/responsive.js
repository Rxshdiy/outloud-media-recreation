// when image gets clicked, classlist will be added to .bar

const menuIcon = document.querySelector('.bar');

menuIcon.addEventListener('click', () => { 
    const nav = document.querySelector('.nav-links-phone');
    nav.classList.toggle('nav-links-button-clicked');

    if(nav.classList.contains('nav-links-button-clicked')) {
        menuIcon.src = "images/icons/xmark-solid.svg";
    } else {
        menuIcon.src = "images/icons/bars-solid.svg";
    }
}
);

