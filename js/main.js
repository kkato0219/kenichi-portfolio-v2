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

// ================================
// Works Filter
// ================================
const filterBtns = document.querySelectorAll('.works__filter-btn');
const workCards = document.querySelectorAll('.works__card');

// 初期状態 — extraカードを非表示
document.querySelectorAll('.works__card--extra').forEach(card => {
  card.style.display = 'none';
});

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {

    // アクティブボタンの切り替え
    filterBtns.forEach(b => {
      b.classList.remove('works__filter-btn--active');
      b.setAttribute('aria-selected', 'false');
    });
    btn.classList.add('works__filter-btn--active');
    btn.setAttribute('aria-selected', 'true');

    const filter = btn.getAttribute('data-filter');

    workCards.forEach(card => {
      const category = card.getAttribute('data-category');

      if(filter === 'all') {
        // すべて → featured4枚だけ表示
        if (card.classList.contains('works__card--extra')) {
          card.style.display = 'none';
        } else {
          card.style.display = 'flex';
        }
      } else if (filter === 'lp') {
        // LP制作 → LP全部表示
        if (category === 'lp') {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      } else {
        // JS・React → カテゴリ一致のみ
        if (category === filter) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      }
    });
  });
});