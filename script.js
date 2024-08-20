document.addEventListener("DOMContentLoaded", function() {
    // Smooth Scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Dynamic CTA Button Animation
    const ctaButtons = document.querySelectorAll('.cta-button');

    ctaButtons.forEach(button => {
        button.addEventListener('mouseover', () => {
            button.classList.add('active');
        });

        button.addEventListener('mouseout', () => {
            button.classList.remove('active');
        });
    });
});
