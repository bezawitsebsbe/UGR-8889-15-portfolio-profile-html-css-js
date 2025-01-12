window.onscroll = function() {
    const stackSection = document.getElementById('stackSection');

    // Check if the window width is greater than 1024 pixels
    if (window.innerWidth > 1024) {
        if (window.scrollY > 150) { // Change this value to adjust when the section appears
            stackSection.classList.add('active'); // Add the active class
        } else {
            stackSection.classList.remove('active'); // Remove the active class
        }
    } 
};
const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');

menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('show'); // Toggle the 'show' class
});    