/*==========================================
        STICKY NAVBAR
==========================================*/

const header = document.querySelector("header");
const topBar = document.querySelector(".top-bar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        topBar.style.transform = "translateY(-100%)";

        header.classList.add("sticky");

    } else {

        topBar.style.transform = "translateY(0)";

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





/*==========================================
        SMOOTH SCROLL
==========================================*/

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


/*==========================================
        ACTIVE NAVIGATION
==========================================*/

const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach(link => {

    link.addEventListener("click", function () {

        navLinks.forEach(item => {

            item.classList.remove("active");

        });

        this.classList.add("active");

    });

});