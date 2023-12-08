document.addEventListener('DOMContentLoaded', function () {
    const tarjetaDatos = document.getElementById('tarjetaDatos');
    const storedPersona = JSON.parse(localStorage.getItem('persona'));

    if (storedPersona) {
        const { nombre, apellido, sexo, documento, edad, categoria } = storedPersona;

        const tarjetaHTML = `
            <h2>Datos Personales</h2>
            <p><strong>Nombre:</strong> ${nombre}</p>
            <p><strong>Apellido:</strong> ${apellido}</p>
            <p><strong>Sexo:</strong> ${sexo}</p>
            <p><strong>Documento:</strong> ${documento}</p>
            <p><strong>Edad:</strong> ${edad}</p>
            <h2>Categoría</h2>
            <p><strong>Categoría:</strong> ${categoria}</p>
        `;

        tarjetaDatos.innerHTML = tarjetaHTML;
    } else {
        tarjetaDatos.innerHTML = '<p>No se encontraron datos almacenados.</p>';
    }
});
