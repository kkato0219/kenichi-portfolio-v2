// ================================
// AOS 初期化
// ================================
AOS.init({
  duration: 600,
  easing: 'ease-in-out',
  once: true,
  offset: 80
});

// ================================
// Navbar — スクロール時 shadow
// ================================
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 20) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ================================
// ハンバーガーメニュー
// ================================
const hamburger = document.querySelector('.navbar__hamburger');
const mobileMenu = document.querySelector('.navbar__mobile-menu');

hamburger.addEventListener('click', () => {
  const isOpen = hamburger.classList.toggle('is-open');
  mobileMenu.classList.toggle('is-open');
  hamburger.setAttribute('aria-expanded', isOpen);
  mobileMenu.setAttribute('aria-hidden', !isOpen);
});