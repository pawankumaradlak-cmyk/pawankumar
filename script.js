/* =====================================================
   IEEE INNOVATEX 2026
   JAVASCRIPT
===================================================== */


/* =====================================================
   MOBILE MENU
===================================================== */

const menuButton =
    document.getElementById("menuButton");

const navigation =
    document.getElementById("navigation");


menuButton.addEventListener("click", function () {

    navigation.classList.toggle("active");

});



/* =====================================================
   CLOSE MENU AFTER CLICK
===================================================== */

const navigationLinks =
    document.querySelectorAll(".navigation a");


navigationLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navigation.classList.remove("active");

    });

});



/* =====================================================
   REGISTER BUTTON
===================================================== */

const registerButton =
    document.getElementById("registerButton");


registerButton.addEventListener("click", function () {

    alert(
        "Registration for IEEE InnovateX 2026 will open soon!"
    );

});



/* =====================================================
   HEADER SCROLL EFFECT
===================================================== */

const header =
    document.querySelector(".header");


window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {

        header.style.background =
            "rgba(2, 4, 10, 0.96)";

    }

    else {

        header.style.background =
            "rgba(5, 7, 13, 0.82)";

    }

});



/* =====================================================
   SCROLL REVEAL ANIMATION
===================================================== */

const revealElements =
    document.querySelectorAll(
        ".about-card, .timeline-item, .speaker-card, .developer-card"
    );


const revealObserver =
    new IntersectionObserver(

        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";

                    entry.target.style.transform =
                        "translateY(0)";

                }

            });

        },

        {
            threshold: 0.15
        }

    );



revealElements.forEach(function (element) {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(30px)";

    element.style.transition =
        "opacity 0.6s ease, transform 0.6s ease";

    revealObserver.observe(element);

});