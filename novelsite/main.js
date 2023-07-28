const topBar = document.querySelector('.top-bar');
const topBarOffset = topBar.offsetTop;

function toggleStickyNavbar() {
  if (window.pageYOffset >= topBarOffset) {
    topBar.classList.add('sticky');
  } else {
    topBar.classList.remove('sticky');
  }
}



window.addEventListener('scroll', toggleStickyNavbar);


