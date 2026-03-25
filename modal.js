const imagenes = document.querySelectorAll('.img-galeria');
const modal = document.getElementById('modal');
const img = document.getElementById('img-modal');
const boton = document.getElementById('modal-btn');

if (imagenes.length && modal && img && boton) {
  imagenes.forEach((imagen) => {
    imagen.addEventListener('click', (event) => {
      img.setAttribute('src', event.currentTarget.src);
      img.setAttribute('alt', event.currentTarget.alt || 'Foto ampliada');
      modal.classList.add('modal-open');
    });
  });

  boton.addEventListener('click', () => {
    modal.classList.remove('modal-open');
  });

  modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.classList.remove('modal-open');
    }
  });
}
