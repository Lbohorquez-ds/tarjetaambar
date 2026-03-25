const contador = document.getElementById('contador');

if (contador) {
  const fechaObjetivo = contador.dataset.target || '2026-05-09T21:00:00';
  const fechaDestino = new Date(fechaObjetivo).getTime();

  const ids = {
    dias: document.getElementById('dias'),
    horas: document.getElementById('horas'),
    minutos: document.getElementById('minutos'),
    segundos: document.getElementById('segundos')
  };

  const actualizarTemporizador = () => {
    const ahora = new Date().getTime();
    const distancia = fechaDestino - ahora;

    if (distancia <= 0) {
      if (ids.dias) ids.dias.textContent = '0';
      if (ids.horas) ids.horas.textContent = '0';
      if (ids.minutos) ids.minutos.textContent = '0';
      if (ids.segundos) ids.segundos.textContent = '0';
      return;
    }

    const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

    if (ids.dias) ids.dias.textContent = dias;
    if (ids.horas) ids.horas.textContent = horas;
    if (ids.minutos) ids.minutos.textContent = minutos;
    if (ids.segundos) ids.segundos.textContent = segundos;
  };

  actualizarTemporizador();
  setInterval(actualizarTemporizador, 1000);
}
