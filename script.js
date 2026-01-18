// 1. Reveal Animation au scroll (Intersection Observer)
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.15, rootMargin: "0px 0px -50px 0px" });

revealElements.forEach(el => revealObserver.observe(el));

// 2. Navbar Glass Effect on Scroll
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// 3. Logique du Slider Avant/Après
const sliderRange = document.getElementById('sliderRange');
const comparisonOverlay = document.querySelector('.img-comp-overlay');
const sliderLine = document.querySelector('.slider-line');

if (sliderRange && comparisonOverlay) {
    sliderRange.addEventListener('input', (e) => {
        const sliderPos = e.target.value + "%";
        comparisonOverlay.style.width = sliderPos;
        sliderLine.style.left = sliderPos;
    });
}

// 4. Auto-resize du textarea
function autoResize(textarea) {
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
}

// 5. Menu Mobile (Burger)
const burger = document.querySelector('.burger-menu');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links a');

if (burger) {
    burger.addEventListener('click', () => {
        const isOpened = navLinks.classList.toggle('active');
        navLinks.classList.toggle('mobile-open');

        burger.classList.toggle('open');
        burger.setAttribute('aria-expanded', isOpened);

        document.body.style.overflow = isOpened ? 'hidden' : 'auto';

        const spans = burger.querySelectorAll('span');
        if (isOpened) {
            spans[0].style.transform = "rotate(45deg) translate(5px, 6px)";
            spans[1].style.transform = "rotate(-45deg) translate(5px, -6px)";
        } else {
            spans[0].style.transform = "none";
            spans[1].style.transform = "none";
        }
    });

    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            navLinks.classList.remove('mobile-open');
            document.body.style.overflow = 'auto';
            burger.setAttribute('aria-expanded', false);
            const spans = burger.querySelectorAll('span');
            spans[0].style.transform = "none";
            spans[1].style.transform = "none";
        });
    });
}

// 6. Gestion fluide des détails (FAQ Accordéon Exclusif)
const details = document.querySelectorAll("details");
details.forEach((targetDetail) => {
    targetDetail.addEventListener("click", () => {
        details.forEach((detail) => {
            if (detail !== targetDetail) {
                detail.removeAttribute("open");
            }
        });
    });
});