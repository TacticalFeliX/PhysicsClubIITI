// Smooth scrolling for navigation links
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        // Prevent default anchor behavior
        e.preventDefault();

        // Scroll to the target section
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add more interactive functionality here as needed
// Example: Dynamic content loading or animations
console.log("Physics Club website script loaded!");
