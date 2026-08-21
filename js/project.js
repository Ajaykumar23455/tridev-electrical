// =====================================================
//              PROJECT PAGE JAVASCRIPT
// =====================================================


// =====================================================
//              AOS ANIMATION
// =====================================================

AOS.init({

    duration: 1000,

    easing: "ease-in-out",

    once: false,

    mirror: true,

    offset: 120

});


// =====================================================
//              PROJECT BUTTON SCROLL
// =====================================================

const exploreButton = document.querySelector('.hero-button');

if (exploreButton) {

    exploreButton.addEventListener('click', function (event) {

        event.preventDefault();

        const projectsSection =
            document.querySelector('#projects');

        if (projectsSection) {

            projectsSection.scrollIntoView({

                behavior: 'smooth',

                block: 'start'

            });

        }

    });

}


// =====================================================
//              PROJECT CARD HOVER EFFECT
// =====================================================

const projectCards =
    document.querySelectorAll('.project-card');

projectCards.forEach(function (card) {

    card.addEventListener('mouseenter', function () {

        card.classList.add('project-active');

    });


    card.addEventListener('mouseleave', function () {

        card.classList.remove('project-active');

    });

});


// =====================================================
//              PROJECT IMAGE EFFECT
// =====================================================

const projectImages =
    document.querySelectorAll('.project-card-image');

projectImages.forEach(function (image) {

    image.addEventListener('mouseenter', function () {

        image.classList.add('image-active');

    });


    image.addEventListener('mouseleave', function () {

        image.classList.remove('image-active');

    });

});


// =====================================================
//              NAVBAR SCROLL EFFECT
// =====================================================

const topBar = document.querySelector('.top-bar');
const navbar = document.querySelector('header');

window.addEventListener('scroll', function () {

    if (window.scrollY > 10) {

        // Hide TOP BAR
        topBar.classList.add('hide-topbar');

        // Move NAVBAR to the top
        navbar.classList.add('sticky');

    } else {

        // Show TOP BAR
        topBar.classList.remove('hide-topbar');

        // Move NAVBAR below TOP BAR
        navbar.classList.remove('sticky');

    }

});



document.addEventListener("DOMContentLoaded", function () {

    const menuButton = document.getElementById("menuButton");
    const mobileNav = document.getElementById("mobileNav");

    menuButton.addEventListener("click", function () {

        mobileNav.classList.toggle("mobile-active");

        menuButton.classList.toggle("active");

    });

});