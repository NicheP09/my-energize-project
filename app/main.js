const hamburgerBtn = document.querySelector('.hamburger-button');

hamburgerBtn.addEventListener('click', () => {
  const nav= document.querySelector('nav');

  nav.classList.toggle('swipe-right');
})