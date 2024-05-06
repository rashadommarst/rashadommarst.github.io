// JavaScript code to make the website astoundingly amazing

document.addEventListener("DOMContentLoaded", function() {
    
    
    
    // Add a scroll-to-top button
    const scrollToTopButton = document.createElement("button");
    scrollToTopButton.textContent = "↑";
    scrollToTopButton.classList.add("scroll-to-top-button");
    document.body.appendChild(scrollToTopButton);

    scrollToTopButton.addEventListener("click", function() {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // Show/hide scroll-to-top button based on scroll position
    window.addEventListener("scroll", function() {
        if (window.scrollY > 500) {
            scrollToTopButton.style.display = "block";
        } else {
            scrollToTopButton.style.display = "none";
        }
    });

    // Add animations to project boxes
    const projectBoxes = document.querySelectorAll(".project-box");
    projectBoxes.forEach(box => {
        box.addEventListener("mouseenter", function() {
            this.style.transform = "translateY(-10px)";
        });
        box.addEventListener("mouseleave", function() {
            this.style.transform = "translateY(0)";
        });
    });

    // Add a responsive navigation menu
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav-menu");

    menuToggle.addEventListener("click", function() {
        navMenu.classList.toggle("active");
    });
});


