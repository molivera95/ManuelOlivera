//Alerta al acceder:

alert("Bienvenido al censo digital. Respondé las preguntas :D");

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


// Ingreso de datos del censo:

const cantidadFamiliares = parseInt(prompt("Cantidad de familiares que van a contestar (en números)"));

for (let i = 0; i < cantidadFamiliares; i++) {
    let nombre = prompt("Ingrese su nombre:");
    let apellido = prompt("Ingrese su apellido:");
    let esHombre = confirm("Apretá aceptar si sos hombre. Si sos mujer, tocá cancelar");
    let sexo;
    let saludo;
    let categoria

    if (esHombre) {
        saludo = "¡Bienvenido!";
        sexo = "masculino"
    } else {
        saludo = "¡Bienvenida!";
        sexo = "femenino"
    }

    let documento = prompt("Ingrese su número de documento:");
    let edad = parseInt(prompt("Ingrese su edad:"));

    if (edad >= 0 && edad <= 12) {
        categoria = "niño"
        alert("Hey " + nombre + " " + apellido + ", " + saludo + " Estás en la categoría: " + categoria + ".");
    } else if (edad >= 13 && edad <= 18) {
        categoria = "adolescente"
        alert("Hey " + nombre + " " + apellido + ", " + saludo + " Estás en la categoría: " + categoria + ".");
    } else if (edad >= 19 && edad <= 29) {
        categoria = "joven"
        alert("Hey " + nombre + " " + apellido + ", " + saludo + " Estás en la categoría: " + categoria + ".");
    } else if (edad >= 30 && edad <= 69) {
        categoria = "adulto"
        alert("Hey " + nombre + " " + apellido + ", " + saludo + " Estás en la categoría: " + categoria + ".");
    } else {
        categoria = "adulto mayor"
        alert("Hey " + nombre + " " + apellido + ", " + saludo + " Estás en la categoría: " + categoria + ".");
    }


        // Creador de objetos para representar a la persona:

    const persona = {
        nombre: nombre,
        apellido: apellido,
        sexo: sexo,
        documento: documento,
        edad: edad,
        categoria: categoria
    };

    // Función que pushea la persona al array:

    personas.push(persona);
    
}

// Muestra el array de personas en la consola:

console.log("base de datos de personas", personas);


// Agrupando personas por categoría
const personasPorCategoria = personas.reduce((result, persona) => {
    if (!result[persona.categoria]) {
        result[persona.categoria] = [];
    }
    result[persona.categoria].push(persona);
    return result;
}, {});

// Mostrar cada categoría en un console log diferente
for (const categoria in personasPorCategoria) {
    if (Object.hasOwnProperty.call(personasPorCategoria, categoria)) {
        console.log(`Categoría: ${categoria}`);
        console.log(personasPorCategoria[categoria]);
    }
};
