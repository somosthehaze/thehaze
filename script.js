const header = document.querySelector("header");
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");
const track = document.querySelector(".slides");
const images = document.querySelectorAll(".slides img");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
let sliderIndex = 0;

function handleHeaderState() {
    if (!header) {
        return;
    }

    if (window.scrollY > 24) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
}

window.addEventListener("DOMContentLoaded", () => {
    if (header) {
        header.classList.add("show");
    }
});

window.addEventListener("scroll", handleHeaderState);
handleHeaderState();

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (event) => {
        const targetId = anchor.getAttribute("href");
        const target = targetId ? document.querySelector(targetId) : null;

        if (!target) {
            return;
        }

        event.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
        nav?.classList.remove("active");
    });
});

menuToggle?.addEventListener("click", () => {
    nav?.classList.toggle("active");
});

function updateSlider() {
    if (!track) {
        return;
    }

    track.style.transform = `translateX(-${sliderIndex * 100}%)`;
}

nextBtn?.addEventListener("click", () => {
    if (sliderIndex < images.length - 1) {
        sliderIndex += 1;
        updateSlider();
    }
});

prevBtn?.addEventListener("click", () => {
    if (sliderIndex > 0) {
        sliderIndex -= 1;
        updateSlider();
    }
});