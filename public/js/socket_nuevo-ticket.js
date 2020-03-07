// Comando para establecer la conexion
var socket = io();
var label = $('#lblNuevoTicket');

socket.on('connect', () => {
    console.log('Conectado el servidor');
});
socket.on('disconnect', () => {
    console.log('Desconectado del servidor');
});

socket.on('estadoActual', (siguienteTicket) => {
    label.text(siguienteTicket.actual);
});

$('button').on('click', () => {
    socket.emit('siguienteTicket', null, (siguienteTicket) => {
        label.text(siguienteTicket);
    });
});
