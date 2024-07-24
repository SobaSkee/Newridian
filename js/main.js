
const menuIcon = document.querySelector('.mobile-nav #open-icon');
const menuIconPath = document.querySelector(".mobile-nav #menu-icon-path");

function toggleNav() {
  const sidebar = document.querySelector('.mobile-nav .sidebar');
  const overlay = document.querySelector('.mobile-nav .overlay');
  const body = document.body;
  // paths for the open and close buttons
  const openPath = "M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z";
  const closePath = "m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z";
  if (sidebar.style.display === 'none' || sidebar.style.display === '') {
    sidebar.style.display = 'flex';
    overlay.style.display = 'block';
    menuIconPath.setAttribute('d', closePath);
    body.classList.add('no-scroll');
  } else {
    sidebar.style.display = 'none';
    overlay.style.display = 'none';
    menuIconPath.setAttribute('d', openPath);
    body.classList.remove('no-scroll');
  }
}

function changeColor() {
  menuIcon.setAttribute('fill', '#EF9539');
}

function revertColor() {
  menuIcon.setAttribute('fill', 'black');
}