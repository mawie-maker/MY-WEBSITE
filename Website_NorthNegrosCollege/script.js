/* =====================================================
   OPENING INTRO
===================================================== */

const intro = document.getElementById("intro");

if (intro) {

    document.body.style.overflow = "hidden";

    window.addEventListener("load", function () {

        setTimeout(function () {

            intro.classList.add("hide-intro");

            document.body.style.overflow = "";

        }, 3500);

    });

}



/* =====================================================
   NORTH NEGROS COLLEGE
   BS COMPUTER SCIENCE WEBSITE
   JAVASCRIPT
===================================================== */


/* ================= BACKGROUND MUSIC ================= */

const bgMusic = document.getElementById("bgMusic");
const musicButton = document.getElementById("musicButton");

let musicPlaying = false;

if (musicButton && bgMusic) {

    musicButton.addEventListener("click", function () {

        if (!musicPlaying) {

            bgMusic.volume = 0.25;

            bgMusic.play()
                .then(() => {

                    musicPlaying = true;

                    musicButton.innerHTML = "🎵 Music ON";

                    musicButton.classList.add("music-playing");

                })
                .catch(error => {

                    console.log("Music could not start:", error);

                });

        } else {

            bgMusic.pause();

            musicPlaying = false;

            musicButton.innerHTML = "🔇 Music OFF";

            musicButton.classList.remove("music-playing");

        }

    });

}


/* ================= NAVIGATION ================= */

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {

    link.addEventListener("click", function () {

        navLinks.forEach(item => {
            item.classList.remove("active");
        });

        this.classList.add("active");

    });

});


/* ================= SCROLL ANIMATION ================= */

const animatedElements = document.querySelectorAll(
    ".card, .about-image, .about-text, .gallery-item, .section-title, .contact-info, .social-links"
);


const observer = new IntersectionObserver(

    function (entries) {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },

    {
        threshold: 0.15
    }

);


animatedElements.forEach(element => {

    element.classList.add("hidden");

    observer.observe(element);

});


/* ================= ACTIVE NAVIGATION ON SCROLL ================= */

const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", function () {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection = section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") === "#" + currentSection
        ) {

            link.classList.add("active");

        }

    });

});


/* ================= BACK TO TOP BUTTON ================= */

const backToTop = document.createElement("button");

backToTop.innerHTML = "↑";

backToTop.className = "back-to-top";

document.body.appendChild(backToTop);


window.addEventListener("scroll", function () {

    if (window.scrollY > 500) {

        backToTop.classList.add("visible");

    } else {

        backToTop.classList.remove("visible");

    }

});


backToTop.addEventListener("click", function () {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/* ================= CARD HOVER EFFECT ================= */

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mousemove", function (event) {

        const rect = card.getBoundingClientRect();

        const x =
            event.clientX - rect.left;

        const y =
            event.clientY - rect.top;

        const centerX =
            rect.width / 2;

        const centerY =
            rect.height / 2;

        const rotateX =
            (y - centerY) / 15;

        const rotateY =
            (centerX - x) / 15;

        card.style.transform =
            `perspective(800px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-10px)`;

    });


    card.addEventListener("mouseleave", function () {

        card.style.transform =
            "perspective(800px) rotateX(0) rotateY(0) translateY(0)";

    });

});


/* ================= TYPING EFFECT ================= */

const heroTitle = document.querySelector(".hero h1");

if (heroTitle) {

    const originalText = heroTitle.innerText;

    heroTitle.innerHTML = "";

    let characterIndex = 0;


    function typeTitle() {

        if (characterIndex < originalText.length) {

            heroTitle.innerHTML +=
                originalText.charAt(characterIndex);

            characterIndex++;

            setTimeout(typeTitle, 60);

        }

    }


    typeTitle();

}


/* ================= RANDOM GREEN PARTICLES ================= */

const particleContainer = document.createElement("div");

particleContainer.className = "particles";

document.body.appendChild(particleContainer);


for (let i = 0; i < 35; i++) {

    const particle = document.createElement("span");

    particle.className = "particle";

    particle.style.left =
        Math.random() * 100 + "%";

    particle.style.animationDelay =
        Math.random() * 8 + "s";

    particle.style.animationDuration =
        5 + Math.random() * 8 + "s";

    particleContainer.appendChild(particle);

}


/* ================= PAGE LOADING ================= */

window.addEventListener("load", function () {

    document.body.classList.add("loaded");

});


/* ================= CONSOLE MESSAGE ================= */

console.log(
    "🎓 North Negros College - BS Computer Science Website Loaded!"
);

console.log(
    "💻 Built with HTML, CSS and JavaScript."
);