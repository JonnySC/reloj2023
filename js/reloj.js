// Obtener el elemento del reloj
var clock = document.getElementById("clock");

// Función para actualizar el reloj
function updateClock() {
    // Obtener la fecha y hora actual
    var now = new Date();

    // Calcular los días, horas, minutos y segundos transcurridos en el año
    var startOfYear = new Date(now.getFullYear(), 0, 0);
    var diff = now - startOfYear;
    var days = Math.floor(diff / (1000 * 60 * 60 * 24));
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    // Actualizar el contenido del reloj
    clock.innerHTML = "Día: " + days + "   "+
                      "Hora: " + hours +"   "+
                      "Min: " + minutes +"   "+
                      "Seg: " + seconds;
}

// Actualizar el reloj cada segundo
setInterval(updateClock, 1000);
