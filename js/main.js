const sidebar = document.querySelector('.mobile-nav .sidebar');
const menuIcon = document.querySelector('.mobile-nav #open-icon');
const menuIconPath = document.querySelector(".mobile-nav #menu-icon-path");
// paths for the open and close buttons
const openPath = "M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z";
const closePath = "m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z";

function toggleNav() {
  
  
  if (menuIconPath.getAttribute('d') === openPath) {
    menuIconPath.setAttribute('d', closePath);
    sidebar.style.display = "flex";
  } 
  else {
    menuIconPath.setAttribute('d', openPath);
    sidebar.style.display = "none";
  }
}

function changeColor() {
  menuIcon.setAttribute('fill', '#EF9539');
}

function revertColor() {
  menuIcon.setAttribute('fill', 'black');
}