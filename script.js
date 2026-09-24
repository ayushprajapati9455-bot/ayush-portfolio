// ==========================================
// AYUSH PRAJAPATI PORTFOLIO - JAVASCRIPT
// ==========================================


// ==========================================
// 1. TYPING EFFECT
// ==========================================

const typingText = document.getElementById("typing-text");

const texts = [
    "B.Tech CSE Student",
    "Web Developer",
    "C Programmer",
    "Frontend Developer"
];

let textIndex = 0;
let charIndex = 0;
let deleting = false;

function typingEffect() {

    const currentText = texts[textIndex];

    if (!deleting) {

        typingText.textContent =
            currentText.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentText.length) {

            deleting = true;

            setTimeout(typingEffect, 1500);

            return;
        }

    } else {

        typingText.textContent =
            currentText.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            textIndex++;

            if (textIndex >= texts.length) {
                textIndex = 0;
            }
        }
    }

    setTimeout(
        typingEffect,
        deleting ? 50 : 100
    );
}

typingEffect();


// ==========================================
// 2. DARK / LIGHT MODE
// ==========================================

const themeBtn = document.getElementById("theme-btn");

themeBtn.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {

        themeBtn.textContent = "☀️";

        localStorage.setItem("theme", "dark");

    } else {

        themeBtn.textContent = "🌙";

        localStorage.setItem("theme", "light");
    }

});


// ==========================================
// 3. REMEMBER THEME
// ==========================================

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {

    document.body.classList.add("dark-mode");

    themeBtn.textContent = "☀️";
}


// ==========================================
// 4. BACK TO TOP BUTTON
// ==========================================

const topBtn = document.getElementById("top-btn");

window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";
    }

});


topBtn.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// ==========================================
// 5. PROJECT SCREENSHOT GALLERY
// ==========================================

const gallery = document.getElementById("gallery");

const galleryImage =
    document.getElementById("gallery-image");

const galleryTitle =
    document.getElementById("gallery-title");

const imageNumber =
    document.getElementById("image-number");


let currentProject = "";

let currentImage = 0;


// ==========================================
// PROJECT IMAGES
// ==========================================

const projectImages = {

    amazon: {

        title: "Amazon Clone",

        images: [

            "images/amazon-clone/home.jpg",

            "images/amazon-clone/login.jpg",

            "images/amazon-clone/product.jpg",

            "images/amazon-clone/cart.jpg",

            "images/amazon-clone/checkout.jpg"

        ]

    },


    bookstore: {

        title: "Online Book Store",

        images: [

            "images/book-store/home.jpg",

            "images/book-store/login.jpg",

            "images/book-store/registration.jpg",

            "images/book-store/catalogue.jpg",

            "images/book-store/cse-books.jpg",

            "images/book-store/ece-books.jpg",

            "images/book-store/eee-books.jpg",

            "images/book-store/me-books.jpg",

            "images/book-store/cart.jpg"

        ]

    },


    registration: {

        title: "Registration Form",

        images: [

            "images/registration-form/form.jpg",

            "images/registration-form/validation.jpg",

            "images/registration-form/success.jpg"

        ]

    }

};


// ==========================================
// 6. OPEN GALLERY
// ==========================================

function openGallery(project) {

    currentProject = project;

    currentImage = 0;

    gallery.style.display = "flex";

    document.body.style.overflow = "hidden";

    showImage();

}


// ==========================================
// 7. SHOW IMAGE
// ==========================================

function showImage() {

    const project =
        projectImages[currentProject];

    if (!project) {
        return;
    }

    galleryTitle.textContent =
        project.title;

    galleryImage.src =
        project.images[currentImage];

    galleryImage.alt =
        project.title + " Screenshot " +
        (currentImage + 1);

    imageNumber.textContent =
        (currentImage + 1) +
        " / " +
        project.images.length;
}


// ==========================================
// 8. NEXT IMAGE
// ==========================================

function nextImage() {

    const project =
        projectImages[currentProject];

    currentImage++;

    if (currentImage >= project.images.length) {

        currentImage = 0;
    }

    showImage();
}


// ==========================================
// 9. PREVIOUS IMAGE
// ==========================================

function previousImage() {

    const project =
        projectImages[currentProject];

    currentImage--;

    if (currentImage < 0) {

        currentImage =
            project.images.length - 1;
    }

    showImage();
}


// ==========================================
// 10. CLOSE GALLERY
// ==========================================

function closeGallery() {

    gallery.style.display = "none";

    document.body.style.overflow = "auto";
}


// ==========================================
// 11. ESC KEY
// ==========================================

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        closeGallery();
    }

});


// ==========================================
// 12. ARROW KEY NAVIGATION
// ==========================================

document.addEventListener("keydown", function (event) {

    if (gallery.style.display !== "flex") {
        return;
    }

    if (event.key === "ArrowRight") {

        nextImage();
    }

    if (event.key === "ArrowLeft") {

        previousImage();
    }

});
// ==========================================
// CONTACT FORM
// ==========================================

const contactForm = document.getElementById("contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        alert("Thank you! Your message has been received.");

    });

}
// ==========================================
// MOBILE NAVBAR
// ==========================================

const menuBtn = document.getElementById("menu-btn");
const navMenu = document.getElementById("nav-menu");

if (menuBtn && navMenu) {

    menuBtn.addEventListener("click", function () {

        navMenu.classList.toggle("active");

        if (navMenu.classList.contains("active")) {
            menuBtn.textContent = "✕";
            document.body.style.overflow = "hidden";
        } else {
            menuBtn.textContent = "☰";
            document.body.style.overflow = "";
        }

    });

    const navLinks = document.querySelectorAll("#nav-menu a");

    navLinks.forEach(function (link) {
        link.addEventListener("click", function () {

            navMenu.classList.remove("active");
            menuBtn.textContent = "☰";
            document.body.style.overflow = "";

        });
    });
}
document.addEventListener("keydown", function (event) {

    if (event.key === "Escape" && navMenu.classList.contains("active")) {

        navMenu.classList.remove("active");
        menuBtn.textContent = "☰";
        document.body.style.overflow = "";

    }

});
    // Close mobile menu when clicking outside

document.addEventListener("click", function (event) {

    if (!menuBtn || !navMenu) return;

    const clickedInsideMenu = navMenu.contains(event.target);
    const clickedMenuButton = menuBtn.contains(event.target);

    if (!clickedInsideMenu && !clickedMenuButton) {
        navMenu.classList.remove("active");
        menuBtn.textContent = "☰";
    }

});
// Active navbar link

const sections = document.querySelectorAll("section");
const allNavLinks = document.querySelectorAll("#nav-menu a");

window.addEventListener("scroll", function () {

    let currentSection = "";

    sections.forEach(function (section) {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight) {

            currentSection = section.getAttribute("id");
        }
    });

    allNavLinks.forEach(function (link) {

        link.classList.remove("active-link");

        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active-link");
        }

    });

});
// Set Home as active link when page loads

window.addEventListener("load", function () {

    const homeLink = document.querySelector('#nav-menu a[href="#home"]');

    if (homeLink) {
        homeLink.classList.add("active-link");
    }

});