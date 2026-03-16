// Fecha de destino
const fechaDestino = new Date('2026-05-09T21:00:00').getTime();

// Actualiza el temporizador cada segundo
const intervalo = setInterval(function() {

    // Obtén la fecha y hora actuales
    const ahora = new Date().getTime();

    // Calcula la diferencia entre la fecha destino y la fecha actual
    const distancia = fechaDestino - ahora;

    // Calcula los días, horas, minutos y segundos restantes
    const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

    // Muestra el tiempo restante
    document.getElementById('dias').innerHTML = dias;
    document.getElementById('horas').innerHTML = horas;
    document.getElementById('minutos').innerHTML = minutos;
    document.getElementById('segundos').innerHTML = segundos;

    // Si el temporizador ha terminado, muestra un mensaje
    if (distancia <= 0) {
        clearInterval(intervalo);
        document.getElementById('contador').innerHTML = "¡El evento ha comenzado!";
    }

}, 1000);
