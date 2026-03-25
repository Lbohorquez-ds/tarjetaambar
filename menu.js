const btnMenu = document.getElementById('btnMenu');
const menu = document.getElementById('menu');

if (btnMenu && menu) {
  btnMenu.addEventListener('click', () => {
    menu.classList.toggle('mostrar');
  });

  document.addEventListener('click', (event) => {
    const clickedInsideMenu = menu.contains(event.target);
    const clickedButton = btnMenu.contains(event.target);

    if (!clickedInsideMenu && !clickedButton) {
      menu.classList.remove('mostrar');
    }
  });
}
