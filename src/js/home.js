window.onload = function() {
            const heading = document.getElementById('movingHeading');
            heading.style.transform = 'translateX(100px)'; // Move the heading 100px to the right
        };
const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');

menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('show'); // Toggle the 'show' class
});
// Select all elements with the class 'li-wrapper'
const liWrappers = document.querySelectorAll('.li-wrapper');

// Function to set the active class
function setActive(index) {
    // Remove 'active' class from all elements
    liWrappers.forEach((li) => li.classList.remove('active'));
    
    // Add 'active' class to the selected element
    if (liWrappers[index]) {
        liWrappers[index].classList.add('active');
    }
}

// Example: Adding event listeners to each li-wrapper
liWrappers.forEach((li, index) => {
    li.addEventListener('click', () => {
        setActive(index);
    });
});