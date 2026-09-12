// =============================
// HERO SLIDER
// =============================

const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const next = document.getElementById("next");
const prev = document.getElementById("prev");

let current = 0;


// =============================
// SHOW SLIDE
// =============================

function showSlide(index) {

    slides.forEach((slide) => {
        slide.classList.remove("active");
    });

    dots.forEach((dot) => {
        dot.classList.remove("active");
    });

    slides[index].classList.add("active");

    if (dots[index]) {
        dots[index].classList.add("active");
    }

}


// =============================
// NEXT SLIDE
// =============================

function nextSlide() {

    current++;

    if (current >= slides.length) {

        current = 0;

    }

    showSlide(current);

}


// =============================
// PREVIOUS SLIDE
// =============================

function prevSlide() {

    current--;

    if (current < 0) {

        current = slides.length - 1;

    }

    showSlide(current);

}


// =============================
// SLIDER BUTTONS
// =============================

if (next) {

    next.addEventListener("click", nextSlide);

}


if (prev) {

    prev.addEventListener("click", prevSlide);

}


// =============================
// AUTO SLIDE
// =============================

if (slides.length > 0) {

    setInterval(nextSlide, 400000);

}


// =============================
// DOT CLICK
// =============================

dots.forEach((dot, index) => {

    dot.addEventListener("click", () => {

        current = index;

        showSlide(current);

    });

});


// =============================
// STICKY NAVBAR
// =============================

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");
    const topBar = document.querySelector(".top-bar");

    if (!header) {
        return;
    }


    if (window.scrollY > 80) {

        // Hide TOP BAR
        if (topBar) {
            topBar.classList.add("hide-topbar");
        }

        // Keep NAVBAR at top
        header.classList.add("sticky");

    }

    else {

        // Show TOP BAR
        if (topBar) {
            topBar.classList.remove("hide-topbar");
        }

        // Return navbar to normal position
        header.classList.remove("sticky");

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

window.addEventListener("scroll", function () {

    const header = document.querySelector("header");

    if (window.scrollY > 36) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }

});