var socket = io();

var searchParams = new URLSearchParams(window.location.search);
if (!searchParams.has(`escritorio`)) {
    window.location = 'index.html';
    throw new Error('El escritorio es necesario');
}
var escritorio = searchParams.get(`escritorio`);
var label = $('small');
console.log(escritorio);

$('h1').text(`Escritorio: ${escritorio}`);

$('button').on('click', () => {
    socket.emit('atenderTicket', { escritorio }, (rs) => {
        if (rs === 'No hay tickets') {
            label.text(rs);
            return alert(rs)
        };
        label.text(rs.numero);
    });
    socket.emit('ultimos4', { escritorio });
});
