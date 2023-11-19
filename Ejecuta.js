$(document).ready(function () {
    $('ul.tabs li a:first').addClass('active');
    $('.contenedor section').hide();
    $('.contenedor section:first').show();
    $('ul.tabs li a').click(function () {
        $('ul.tabs li a').removeClass('active');
        $(this).addClass('active');
        $('.contenedor section').hide();
        let activeT = $(this).attr('href');
        $(activeT).show();
        return false;
    });
});



function capturarCedula() {
    let cedulaBuscar = document.getElementById("cedula").value;
    let cedulaEditar = document.getElementById("numeroCedula");
    let cedulaeliminar = document.getElementById("idPaciente");
    if (cedulaEditar) {
        cedulaEditar.value = cedulaBuscar;
        cedulaeliminar.value = cedulaBuscar;
    }
}
