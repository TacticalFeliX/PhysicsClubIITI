// JavaScript functionality (currently blank, but you can add features here)
// Example: Smooth scrolling for navigation
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Add custom interactivity here
// Example: Dynamic event loading, merchandise gallery, or member profiles.
