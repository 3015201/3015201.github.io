// ============================================
//  NAMISH PARASHER — PORTFOLIO SCRIPT
// ============================================

document.addEventListener('DOMContentLoaded', () => {

  // ── Navbar scroll shrink ──────────────────
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // ── Mobile nav toggle ─────────────────────
  const toggle = document.getElementById('navToggle');
  const navLinks = document.querySelector('.nav-links');

  toggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  // Close mobile nav on link click
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
    });
  });

  // ── Scroll reveal ─────────────────────────
  const revealEls = document.querySelectorAll(
    '.exp-item, .skill-card, .edu-item, .about-grid, .contact-links, .section-title, .section-label'
  );

  revealEls.forEach(el => el.classList.add('reveal'));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          // Stagger children in lists
          const delay = entry.target.dataset.delay || 0;
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, delay);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  // Add stagger delays to grid/list children
  document.querySelectorAll('.exp-item').forEach((el, i) => {
    el.dataset.delay = i * 80;
  });

  document.querySelectorAll('.skill-card').forEach((el, i) => {
    el.dataset.delay = i * 60;
  });

  revealEls.forEach(el => observer.observe(el));

  // ── Active nav link on scroll ─────────────
  const sections = document.querySelectorAll('section[id]');
  const links = document.querySelectorAll('.nav-links a');

  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          links.forEach(link => {
            link.style.color = '';
            if (link.getAttribute('href') === `#${entry.target.id}`) {
              link.style.color = 'var(--lavender)';
            }
          });
        }
      });
    },
    { threshold: 0.4 }
  );

  sections.forEach(s => sectionObserver.observe(s));

});
