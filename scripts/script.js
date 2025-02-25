 // scrollAnimation.js
document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".scroll-animation");

    const checkVisibility = () => {
        elements.forEach((element) => {
            const elementTop = element.getBoundingClientRect().top;
            const elementBottom = element.getBoundingClientRect().bottom;

            // Si el elemento está en la vista
            if (elementTop < window.innerHeight && elementBottom >= 0) {
                element.classList.add("visible");
            } else {
                element.classList.remove("visible");
            }
        });
    };

    // Ejecutar la función al cargar la página y al hacer scroll
    window.addEventListener("scroll", checkVisibility);
    window.addEventListener("load", checkVisibility);
});