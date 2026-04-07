/* ============================================================
   Soham Ghosh Portfolio — script.js
   Features: scroll reveal, active nav highlight, mobile menu
   ============================================================ */

// ---- SCROLL REVEAL ----
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
);

document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

// ---- NAVBAR SCROLL EFFECT ----
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.style.background = 'rgba(11,14,26,0.97)';
  } else {
    navbar.style.background = 'rgba(11,14,26,0.85)';
  }
});

// ---- MOBILE MENU ----
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});

// Close mobile menu when a link is clicked
mobileMenu.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
  });
});

// ---- ACTIVE NAV LINK HIGHLIGHT ----
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a, .mobile-menu a');

const activeObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => link.style.color = '');
        const activeLink = document.querySelector(
          `.nav-links a[href="#${entry.target.id}"], .mobile-menu a[href="#${entry.target.id}"]`
        );
        if (activeLink) activeLink.style.color = 'var(--accent)';
      }
    });
  },
  { threshold: 0.4 }
);

sections.forEach((section) => activeObserver.observe(section));

// ---- PHOTO HANDLING ----
// When user adds their photo in the same folder, it will auto-load.
// The img tag already has onerror to hide itself if missing.
// You can change the src to your actual photo filename:
// document.getElementById('profile-img').src = 'photo.jpg';
