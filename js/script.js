const logo = document.querySelector('.logo');
const navLinks = document.querySelector('.nav-links');

logo.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
