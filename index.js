// Array de personas:

const personas = [
        {
            nombre: 'Juan',
            apellido: 'García',
            sexo: 'masculino',
            documento: '456353',
            edad: 28,
            categoria: 'joven'
        },
        {
            nombre: 'María',
            apellido: 'Hernández',
            sexo: 'femenino',
            documento: '4563253',
            edad: 32,
            categoria: 'adulto'
        },
        {
            nombre: 'Luis',
            apellido: 'Martínez',
            sexo: 'masculino',
            documento: '46534563',
            edad: 45,
            categoria: 'adulto'
        },
        {
            nombre: 'Ana',
            apellido: 'López',
            sexo: 'femenino',
            documento: '45963635',
            edad: 15,
            categoria: 'adolescente'
        },
        {
            nombre: 'Pedro',
            apellido: 'Rodríguez',
            sexo: 'masculino',
            documento: '4563653',
            edad: 60,
            categoria: 'adulto mayor'
        },
        {
            nombre: 'Laura',
            apellido: 'Gómez',
            sexo: 'femenino',
            documento: '45636453',
            edad: 20,
            categoria: 'joven'
        },
        {
            nombre: 'Carlos',
            apellido: 'Fernández',
            sexo: 'masculino',
            documento: '4534563',
            edad: 17,
            categoria: 'adolescente'
        },
        {
            nombre: 'Sofía',
            apellido: 'Pérez',
            sexo: 'femenino',
            documento: '45354348',
            edad: 10,
            categoria: 'niño'
        },
        {
            nombre: 'José',
            apellido: 'Sánchez',
            sexo: 'masculino',
            documento: '543453547',
            edad: 35,
            categoria: 'adulto'
        },
        {
            nombre: 'Lucía',
            apellido: 'Martín',
            sexo: 'femenino',
            documento: '93633436',
            edad: 8,
            categoria: 'niño'
        }
    ];


document.addEventListener('DOMContentLoaded', function () {
    const censoForm = document.getElementById('censoForm');

    censoForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const nombre = document.getElementById('nombre').value;
        const apellido = document.getElementById('apellido').value;
        const sexo = document.getElementById('sexo').value;
        const documento = document.getElementById('documento').value;
        const edad = parseInt(document.getElementById('edad').value);

        let categoria;

        if (edad >= 0 && edad <= 12) {
            categoria = "niño";
        } else if (edad >= 13 && edad <= 18) {
            categoria = "adolescente";
        } else if (edad >= 19 && edad <= 29) {
            categoria = "joven";
        } else if (edad >= 30 && edad <= 69) {
            categoria = "adulto";
        } else {
            categoria = "adulto mayor";
        }

        const persona = {
            nombre: nombre,
            apellido: apellido,
            sexo: sexo,
            documento: documento,
            edad: edad,
            categoria: categoria
        };

        // Guardo los datos en localStorage
        localStorage.setItem('persona', JSON.stringify(persona));

        // Redirijo a la página de tarjeta
        window.location.href = 'tarjeta.html';
    });
    let randomBtn = document.getElementById("random");
        randomBtn .addEventListener("click",
        function () {
            // COPIAR ACA
            fetch('https://randomuser.me/api/')
    .then(response => response.json())
    .then(apiData => {
   console.log("paso1");
    // Agregar los datos obtenidos de la API a la persona
    const api = apiData.results[0];
    console.log("paso2");
    const nombre = api.name.first;
    const apellido = api.name.last;
    let sexo = api.gender === "male" ? "Masculino" : "Femenino";
    const documento = api.location.postcode;
    const edad = api.dob.age;

    let categoria;

    if (edad >= 0 && edad <= 12) {
        categoria = "niño";
    } else if (edad >= 13 && edad <= 18) {
        categoria = "adolescente";
    } else if (edad >= 19 && edad <= 29) {
        categoria = "joven";
    } else if (edad >= 30 && edad <= 69) {
        categoria = "adulto";
    } else {
        categoria = "adulto mayor";
    }

    const persona = {
        nombre: nombre,
        apellido: apellido,
        sexo: sexo,
        documento: documento,
        edad: edad,
        categoria: categoria
    };

    // Almaceno la información actualizada en localStorage
    localStorage.setItem('persona', JSON.stringify(persona));
    
    // Redirijo a la página de tarjeta
    window.location.href = 'tarjeta.html';
  })
  .catch(error => {
    console.error('Error al obtener datos de la API:', error);
    // Redirijo a la página de tarjeta incluso si hay un error con la API
    window.location.href = 'tarjeta.html';
  });
        }
        );
});
