const menu = document.getElementById('menu');
const menuIcon = document.querySelector('.menu-icon');


function toggleMenu() {
  if (menu.style.display === 'flex') {
    menu.style.display = 'none';
    menuIcon.innerHTML = '&#9776;';
  } else {
    menu.style.display = 'flex';
    menuIcon.innerHTML = '&#10005;';
  }
}

function togglePopup() {
  const popupForm = document.getElementById('popupForm');
  popupForm.style.display = popupForm.style.display === 'flex' ? 'none' : 'flex';
  menu.style.display = 'none';
  menuIcon.innerHTML = '&#9776;';
}