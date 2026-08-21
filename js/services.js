/*==========================================
        STICKY NAVBAR
==========================================*/

const header = document.querySelector("header");
const topBar = document.querySelector(".top-bar");

window.addEventListener("scroll", function () {

    if (window.scrollY > 10) {

        // Hide top bar
        topBar.classList.add("hide-topbar");

        // Keep navbar at top
        header.classList.add("sticky");

    } else {

        // Show top bar
        topBar.classList.remove("hide-topbar");

        // Remove sticky navbar
        header.classList.remove("sticky");

    }

});


/*==========================================
        FAQ ACCORDION
==========================================*/

const faqs = document.querySelectorAll(".faq-box");

faqs.forEach(faq => {

    const btn = faq.querySelector(".faq-question");
    const icon = btn.querySelector("i");

    btn.addEventListener("click", () => {

        faqs.forEach(item => {

            if (item !== faq) {

                item.classList.remove("active");

                const otherIcon = item.querySelector(".faq-question i");

                otherIcon.classList.remove("fa-minus");
                otherIcon.classList.add("fa-plus");

            }

        });

        faq.classList.toggle("active");

        if (faq.classList.contains("active")) {

            icon.classList.remove("fa-plus");
            icon.classList.add("fa-minus");

        } else {

            icon.classList.remove("fa-minus");
            icon.classList.add("fa-plus");

        }

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



document.addEventListener("DOMContentLoaded", function () {

    const menuButton = document.getElementById("menuButton");
    const mobileNav = document.getElementById("mobileNav");

    menuButton.addEventListener("click", function () {

        mobileNav.classList.toggle("mobile-active");

        menuButton.classList.toggle("active");

    });

});