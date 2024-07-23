const sidebar = document.querySelector('.mobile-nav .sidebar');
const openIcon = document.querySelector('.mobile-nav #open-icon')
function closeNav() {
  sidebar.style.display = "none";
}

function openNav() {
  sidebar.style.display = "flex";
}

function changeColor() {
  openIcon.setAttribute('fill', '#EF9539');
}

function revertColor() {
  openIcon.setAttribute('fill', 'black');
}