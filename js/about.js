/* ==========================================
        STICKY NAVBAR
========================================== */

const header = document.querySelector("header");
const topBar = document.querySelector(".top-bar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.classList.add("sticky");

        if (topBar) {
            topBar.style.display = "none";
        }

    } else {

        header.classList.remove("sticky");

        if (topBar) {
            topBar.style.display = "flex";
        }

    }

});


/* ==========================================
        SCROLL COUNTER ANIMATION
========================================== */

const counters = document.querySelectorAll(".stat-box h2");
const stats = document.querySelector(".company-stats");

let started = false;

function startCounter() {

    counters.forEach(counter => {

        const target = Number(counter.dataset.target);

        const suffix = counter.innerText.includes("%") ? "%" : "+";

        let count = 0;

        counter.innerText = "0" + suffix;

        const increment = Math.ceil(target / 80);

        const timer = setInterval(() => {

            count += increment;

            if (count >= target) {

                counter.innerText = target + suffix;

                clearInterval(timer);

            } else {

                counter.innerText = count + suffix;

            }

        }, 20);

    });

}

function checkCounter() {

    const rect = stats.getBoundingClientRect();

    if (rect.top < window.innerHeight - 100 &&
        rect.bottom > 100) {

        if (!started) {

            started = true;

            startCounter();

        }

    } else {

        started = false;

    }

}

window.addEventListener("scroll", checkCounter);
window.addEventListener("load", checkCounter);


/* ==========================================
        SCROLL REVEAL
========================================== */

const reveals = document.querySelectorAll(
".company-image, .company-content, .stat-box, .mv-card, .why-box, .cta-content"
);

function revealElements() {

    reveals.forEach(element => {

        const top = element.getBoundingClientRect().top;

        if (top < window.innerHeight - 120) {

            element.classList.add("show");

        }

    });

}

window.addEventListener("scroll", revealElements);
window.addEventListener("load", revealElements);


/* ==========================================
        ACTIVE NAVIGATION
========================================== */

const links = document.querySelectorAll("nav ul li a");

links.forEach(link => {

    link.addEventListener("click", function () {

        links.forEach(item => item.classList.remove("active"));

        this.classList.add("active");

    });

});


/* ==========================================
        SMOOTH SCROLL
========================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});


/* ==========================================
        WHY CHOOSE SWIPER
========================================== */

const chooseSwiper = new Swiper(".chooseSwiper", {

    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 30,
    loop: true,
    speed: 800,

    navigation: {
        nextEl: ".choose-nav .swiper-button-next",
        prevEl: ".choose-nav .swiper-button-prev",
    },

    mousewheel: {
        forceToAxis: true,
        sensitivity: 1,
    },

    grabCursor: true,

    breakpoints: {

        0: {
            slidesPerView: 1,
            slidesPerGroup: 1,
        },

        768: {
            slidesPerView: 2,
            slidesPerGroup: 2,
        },

        1024: {
            slidesPerView: 3,
            slidesPerGroup: 3,
        }

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




