/* =======================================================
   HAMBURGER MENU
======================================================= */

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

if (hamburger && navMenu) {

    hamburger.addEventListener("click", () => {

        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");

    });

}


/* =======================================================
   TUTUP MENU SAAT LINK DIKLIK
======================================================= */

const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        if (hamburger && navMenu) {

            hamburger.classList.remove("active");
            navMenu.classList.remove("active");

        }

    });

});


/* =======================================================
   STICKY NAVBAR EFFECT
======================================================= */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (!navbar) return;

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});


/* =======================================================
   BACK TO TOP BUTTON
======================================================= */

const backToTop = document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {

    if (!backToTop) return;

    if (window.scrollY > 300) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

});


if (backToTop) {

    backToTop.addEventListener("click", () => {

        window.scrollTo({

            top: 0,
            behavior: "smooth"

        });

    });

}


/* =======================================================
   SMOOTH SCROLL
======================================================= */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        const targetId = this.getAttribute("href");

        if (targetId === "#") return;

        const target = document.querySelector(targetId);

        if (target) {

            e.preventDefault();

            target.scrollIntoView({

                behavior: "smooth",
                block: "start"

            });

        }

    });

});


/* =======================================================
   WISHLIST PRODUK
======================================================= */

const wishlistButtons = document.querySelectorAll(".wishlist-btn");

wishlistButtons.forEach(button => {

    button.addEventListener("click", () => {

        button.classList.toggle("active");

    });

});


/* =======================================================
   SCROLL ANIMATION
======================================================= */

const fadeElements = document.querySelectorAll(".fade-up");

function revealOnScroll() {

    fadeElements.forEach(element => {

        const windowHeight = window.innerHeight;

        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {

            element.classList.add("show");

        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


/* =======================================================
   BLOG SEARCH
======================================================= */

const searchInput = document.querySelector(".search-input input");
const miniPosts = document.querySelectorAll(".mini-post");

if (searchInput) {

    searchInput.addEventListener("keyup", () => {

        const keyword = searchInput.value.toLowerCase();

        miniPosts.forEach(post => {

            const title = post.innerText.toLowerCase();

            if (title.includes(keyword)) {

                post.style.display = "flex";

            } else {

                post.style.display = "none";

            }

        });

    });

}


/* =======================================================
   TESTIMONI SLIDER
======================================================= */

const track = document.querySelector(".testimonial-track");
const cards = document.querySelectorAll(".testimonial-card");

const prevBtn = document.querySelector(".left-arrow");
const nextBtn = document.querySelector(".right-arrow");

let currentIndex = 0;

function updateSlider(){

    if(!track || cards.length === 0) return;

    const gap = 25;

    const cardWidth = cards[0].offsetWidth + gap;

    track.style.transform = 
    `translateX(-${currentIndex * cardWidth}px)`;

}

if(prevBtn && nextBtn){

    nextBtn.addEventListener("click", ()=>{

        const visibleCards =
            window.innerWidth <= 768 ? 1 : 2;

        const maxIndex =
            cards.length - visibleCards;

        if(currentIndex < maxIndex){

            currentIndex++;

        }else{

            currentIndex = 0;

        }

        updateSlider();

    });

    prevBtn.addEventListener("click", ()=>{

        const visibleCards =
            window.innerWidth <= 768 ? 1 : 2;

        const maxIndex =
            cards.length - visibleCards;

        if(currentIndex > 0){

            currentIndex--;

        }else{

            currentIndex = maxIndex;

        }

        updateSlider();

    });

}

window.addEventListener("resize", updateSlider);

updateSlider();

console.log("Sembako Berkah Bahlil Loaded Successfully");


/* =======================================================
   PREVENT ERROR LOG
======================================================= */

console.log("Sembako Berkah Bahlil Loaded Successfully");
/* =========================================
   SLIDER KATEGORI
========================================= */

const kategoriWrapper =
    document.querySelector(".kategori-wrapper");

const leftBtn =
    document.querySelector(".left-btn");

const rightBtn =
    document.querySelector(".right-btn");

if(kategoriWrapper && leftBtn && rightBtn){

    rightBtn.addEventListener("click", () => {

        kategoriWrapper.scrollBy({

            left: 300,

            behavior: "smooth"

        });

    });

    leftBtn.addEventListener("click", () => {

        kategoriWrapper.scrollBy({

            left: -300,

            behavior: "smooth"

        });

    });

}