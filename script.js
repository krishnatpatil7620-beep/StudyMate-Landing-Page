

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");


menuBtn.addEventListener("click", function () {
    navLinks.classList.toggle("active");

    
    const isOpen = navLinks.classList.contains("active");
    menuBtn.setAttribute("aria-expanded", isOpen);

    
    menuBtn.innerHTML = isOpen
        ? '<i class="fas fa-times"></i>'
        : '<i class="fas fa-bars"></i>';
});


document.querySelectorAll(".nav-links a").forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("active");
        menuBtn.setAttribute("aria-expanded", "false");
        menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    });
});


document.getElementById("year").textContent =
    new Date().getFullYear();
