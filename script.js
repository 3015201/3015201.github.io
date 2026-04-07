/* ============================================================
   Soham Ghosh Portfolio — script.js
   ============================================================ */

// ---- SCROLL REVEAL ----
function activateReveals() {
  const revealEls = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -20px 0px' }
    );
    revealEls.forEach((el) => observer.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add('visible'));
  }

  // Safety net: after 800ms make anything still hidden visible
  setTimeout(() => {
    revealEls.forEach((el) => el.classList.add('visible'));
  }, 800);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', activateReveals);
} else {
  activateReveals();
}

// ---- NAVBAR ----
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;
  navbar.style.background = window.scrollY > 40
    ? 'rgba(255,255,255,0.98)'
    : 'rgba(255,255,255,0.92)';
});

// ---- MOBILE MENU ----
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => mobileMenu.classList.toggle('open'));
    mobileMenu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => mobileMenu.classList.remove('open'));
    });
  }
});
