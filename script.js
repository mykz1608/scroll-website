const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('.navbar__logo');
const navLinks = document.querySelector('.navbar__links');


const home = document.querySelector('#home');
const about = document.querySelector('#about');
const _services = document.querySelector('#services');
const sign_up = document.querySelector('#sign-up');
let homeY,aboutY,servicesY,sign_upY;

// Display Mobile Menu
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
}



//Show active menu when scrolling
const highlightMenu = () => {
    const elem = document.querySelector('.highlight');
    const homeMenu = document.querySelector('#home-page');
    const aboutMenu = document.querySelector('#about-page');
    const servicesMenu = document.querySelector('#services-page');
    const signupMenu = document.querySelector('#signup')
    let scrollPos = window.scrollY;

    //adds 'highlight' class to my menu items
    if(homeY!=undefined && scrollPos>=0 && scrollPos<(homeY+home.offsetHeight)*.75) {
        homeMenu.classList.add('highlight');
        aboutMenu.classList.remove('highlight');
        return
        //console.log((homeY+home.offsetHeight)*.1);
    } 
    else if(aboutY!=undefined && scrollPos>=aboutY*.99 && scrollPos<(aboutY+about.offsetHeight)*.75){
        homeMenu.classList.remove('highlight');
        servicesMenu.classList.remove('highlight');
        aboutMenu.classList.add('highlight');
        return
    }
    else if(aboutY!=undefined && scrollPos>=servicesY*.99 && scrollPos<(servicesY+_services.offsetHeight)*.75){
        aboutMenu.classList.remove('highlight');
        servicesMenu.classList.add('highlight');
        return
    }
    else if(scrollPos>=(servicesY+_services.offsetHeight)*.75) {
        servicesMenu.classList.remove('highlight');
        return
    }

}
window.addEventListener('load', (event) => {


    const getStaticPosition = (element) => {
        return (element.getBoundingClientRect().y + window.scrollY)
    }
    

    homeY = getStaticPosition(home);
    aboutY = getStaticPosition(about);
    servicesY = getStaticPosition(_services);
    sign_upY = getStaticPosition(sign_up);
    highlightMenu();
 

});

menu.addEventListener('click', mobileMenu);
menuLinks.addEventListener('click',mobileMenu);
window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);
