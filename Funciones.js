var pacientes = [];

function obtenerValorInput(selector) {
    return document.querySelector(selector).value;
}

function agregarPaciente() {
    // Obtener los valores del formulario
    var nombre = obtenerValorInput('#agregar [name="nombre"]');
    var apellidos = obtenerValorInput('#agregar [name="apellidos"]');
    var direccion = obtenerValorInput('#agregar [name="direccion"]');
    var telefono = obtenerValorInput('#agregar [name="telefono"]');
    var fechaNacimiento = obtenerValorInput('#agregar [name="fechadenacimiento"]');
    var edad = obtenerValorInput('#agregar [name="edad"]');
    var estadoCivil = document.querySelector('#agregar [name="casado"]:checked') ? 'Casado' : 'Soltero';
    var cedula = obtenerValorInput('#agregar [name="numeroCedula"]');

    // Datos sobre el estado de salud y modo de vida
    var problemasSalud = document.querySelector('#agregar [name="problemasSalud"]:checked');
    var otrosProblemasSalud = obtenerValorInput('#agregar [name="otrosProblemasSalud"]');
    var pesoActual = obtenerValorInput('#agregar [name="pesoActual"]');
    var talla = obtenerValorInput('#agregar [name="talla"]');
    var masaCorporal = obtenerValorInput('#agregar [name="masaCorporal"]');
    var fuma = document.querySelector('#agregar [name="fuma"]:checked') ? 'Sí' : 'No';
    var alcohol = document.querySelector('#agregar [name="alcohol"]:checked') ? 'Sí' : 'No';
    var calidadSueno = document.querySelector('#agregar [name="calidadSueno"]:checked') ? 'Buena' : 'Mala';
    var deportesPracticados = obtenerValorInput('#agregar [name="deportesPracticados"]');
    var modoVida = document.querySelector('#agregar [name="modoVida"]:checked') ? 'Activa' : 'Sedentaria';

    var paciente = {
        nombre: nombre,
        apellidos: apellidos,
        direccion: direccion,
        telefono: telefono,
        fechaNacimiento: fechaNacimiento,
        edad: edad,
        estadoCivil: estadoCivil,
        cedula: cedula,
        problemasSalud: problemasSalud ? problemasSalud.value : '',
        otrosProblemasSalud: otrosProblemasSalud,
        pesoActual: pesoActual,
        talla: talla,
        masaCorporal: masaCorporal,
        fuma: fuma,
        alcohol: alcohol,
        calidadSueno: calidadSueno,
        deportesPracticados: deportesPracticados,
        modoVida: modoVida
    };

    pacientes.push(paciente);

    document.querySelector('#agregar form').reset();
    alert("Paciente introducido con exito");
    // mostrarResultados();
}

function mostrarResultados() {
    var tabla = document.getElementById('tablaResultados');
    tabla.innerHTML = '';

    var encabezados = '<tr><th>Nombre</th><th>Apellidos</th><th>Dirección</th><th>Teléfono</th><th>Fecha de Nacimiento</th><th>Edad</th><th>Estado Civil</th><th>Cédula</th><th>Problemas de Salud</th><th>Otros Problemas de Salud</th><th>Peso Actual (kg)</th><th>Talla (cm)</th><th>Masa Corporal</th><th>Fuma</th><th>Alcohol</th><th>Calidad de Sueño</th><th>Deportes Practicados</th><th>Modo de Vida</th></tr>';

    tabla.innerHTML += encabezados;

    for (var i = 0; i < pacientes.length; i++) {
        var paciente = pacientes[i];

        var fila = '<tr>';
        fila += '<td>' + paciente.nombre + '</td>';
        fila += '<td>' + paciente.apellidos + '</td>';
        fila += '<td>' + paciente.direccion + '</td>';
        fila += '<td>' + paciente.telefono + '</td>';
        fila += '<td>' + paciente.fechaNacimiento + '</td>';
        fila += '<td>' + paciente.edad + '</td>';
        fila += '<td>' + paciente.estadoCivil + '</td>';
        fila += '<td>' + paciente.cedula + '</td>';
        fila += '<td>' + paciente.problemasSalud + '</td>';
        fila += '<td>' + paciente.otrosProblemasSalud + '</td>';
        fila += '<td>' + paciente.pesoActual + '</td>';
        fila += '<td>' + paciente.talla + '</td>';
        fila += '<td>' + paciente.masaCorporal + '</td>';
        fila += '<td>' + paciente.fuma + '</td>';
        fila += '<td>' + paciente.alcohol + '</td>';
        fila += '<td>' + paciente.calidadSueno + '</td>';
        fila += '<td>' + paciente.deportesPracticados + '</td>';
        fila += '<td>' + paciente.modoVida + '</td>';
        fila += '</tr>';

        // Agregar la fila a la tabla
        tabla.innerHTML += fila;
    }
}

function buscarPaciente() {
    var cedulaBuscar = document.getElementById("cedulaBuscar").value;
    var encontrado = false;

    // Buscar al paciente por cédula
    for (var i = 0; i < pacientes.length; i++) {
        if (pacientes[i].cedula === cedulaBuscar) {
            // Agregar lógica para resaltar o marcar el paciente encontrado
            encontrado = true;
            break;
        }
    }

    if (encontrado) {
        mostrarResultados(); // Mostrar todos los resultados
    } else {
        alert("Paciente no encontrado");
    }
}



function eliminarPaciente() {
    // Obtener el número de cédula a eliminar
    var cedulaEliminar = document.querySelector('#eliminar [name="cedulaEliminar"]').value;

    // Buscar el índice del paciente con la cédula proporcionada
    var indicePaciente = pacientes.findIndex(function (paciente) {
        return paciente.cedula === cedulaEliminar;
    });

    if (indicePaciente !== -1) {
        pacientes.splice(indicePaciente, 1);
        document.querySelector('#eliminar form').reset();
        alert("El paciente fue eliminado");
        mostrarResultados();
    } else {
        alert('No se encontró un paciente con esa cédula.');
    }
}

function editarPaciente() {
    var cedulaEditar = document.querySelector('#editar [name="cedulaEditar"]').value;

    var indicePaciente = pacientes.findIndex(function (paciente) {
        return paciente.cedula === cedulaEditar;
    });

    if (indicePaciente !== -1) {
        var nuevoNombre = obtenerValorInput('#editar [name="nombre"]');
        var nuevaFechaNacimiento = obtenerValorInput('#editar [name="fechaNacimiento"]');
        var nuevoNumeroCedula = obtenerValorInput('#editar [name="numeroCedula"]');

        pacientes[indicePaciente].nombre = nuevoNombre;
        pacientes[indicePaciente].fechaNacimiento = nuevaFechaNacimiento;
        pacientes[indicePaciente].cedula = nuevoNumeroCedula;

        document.querySelector('#editar form').reset();
        mostrarResultados();
    } else {
        alert('No se encontró un paciente con esa cédula.');
    }
}

