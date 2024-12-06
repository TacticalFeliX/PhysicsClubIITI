// Ensure the script is loaded after the page content
document.addEventListener('DOMContentLoaded', function () {
  // Add a simple event listener to all navbar links
  const navbarLinks = document.querySelectorAll('.navbar a');

  // Prevent default behavior if necessary (e.g., if using SPA or for debugging)
  navbarLinks.forEach(link => {
      link.addEventListener('click', function (e) {
          // Uncomment the line below to stop the default action if you need custom behavior
          // e.preventDefault();
      });
  });
});
