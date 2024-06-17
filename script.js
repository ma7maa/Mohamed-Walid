// scripts.js

document.addEventListener('DOMContentLoaded', (event) => {
    const themeIcon = document.getElementById('theme-icon');
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const navLinksAnchors = document.querySelectorAll('.nav-links li a');

    themeIcon.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        themeIcon.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
    });

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    navLinksAnchors.forEach(anchor => {
        anchor.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = anchor.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            window.scrollTo({
                top: targetSection.offsetTop - 60,  // Adjusting for fixed header height
                behavior: 'smooth'
            });
            navLinks.classList.remove('active');
        });
    });
});

