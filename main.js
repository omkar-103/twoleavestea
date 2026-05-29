// Mobile menu toggle
const menuBtn = document.getElementById('menuBtn');
const mobileNav = document.getElementById('mobileNav');
if (menuBtn && mobileNav) {
  menuBtn.addEventListener('click', () => mobileNav.classList.toggle('open'));
}

// Sticky header shadow on scroll
const header = document.getElementById('site-header');
window.addEventListener('scroll', () => {
  header.style.boxShadow = window.scrollY > 10 ? '0 2px 20px rgba(42,40,87,0.1)' : 'none';
}, { passive: true });

// Cart counter (demo)
let count = 0;
const cartCount = document.querySelector('.cart-count');
document.querySelectorAll('.btn-add').forEach(btn => {
  btn.addEventListener('click', () => {
    count++;
    cartCount.textContent = count;
    btn.textContent = '✓ Added';
    btn.style.background = '#3a6b35';
    setTimeout(() => {
      btn.textContent = 'Add to Cart';
      btn.style.background = '';
    }, 1600);
  });
});

// Newsletter form
const form = document.getElementById('newsletterForm');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const input = document.getElementById('email-input');
    form.innerHTML = '<p style="color:#FBF9EB;font-family:\'Roboto Mono\',monospace;font-size:.85rem;">✓ Thank you! Welcome to the community 🌿</p>';
  });
}
