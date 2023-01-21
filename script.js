// Select all sections
const sections = document.querySelectorAll('section');

// Select the header
const header = document.querySelector('header');

// Select the footer
const footer = document.querySelector('footer');

// Add event listener to header to change background color on scroll
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 50) {
        header.style.backgroundColor = '#333';
        footer.style.backgroundColor = '#333';
    } else {
        header.style.backgroundColor = 'transparent';
        footer.style.backgroundColor = 'transparent';
    }
});

// Add event listener to each section to change background color on hover
sections.forEach(section => {
    section.addEventListener('mouseover', () => {
        section.style.backgroundColor = '#f5f5f5';
    });
    section.addEventListener('mouseout', () => {
        section.style.backgroundColor = 'transparent';
    });
});
