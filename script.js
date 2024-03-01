document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function (e) {
        // Add your validation logic here
        if (!validateForm()) {
            e.preventDefault();
        }
    });

    function validateForm() {
        // Add your validation logic here
        // Return true if the form is valid, otherwise return false
        return true;
    }
});