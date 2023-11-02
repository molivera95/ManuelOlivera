alert("Bienvenido al censo digital. Respondé las preguntas :D");
const cantidadFamiliares = parseInt(prompt("Cantidad de familiares que van a participar (en números)"));

for (let i = 0; i < cantidadFamiliares; i++) {
    let nombre = prompt("Ingrese su nombre:");
    let apellido = prompt("Ingrese su apellido:");
    let esHombre = confirm("Apretá aceptar si sos hombre. Si sos mujer, tocá cancelar");
    let sexo;

    if (esHombre) {
        sexo = "¡Bienvenido!";
    } else {
        sexo = "¡Bienvenida!";
    }

    let documento = prompt("Ingrese su número de documento:");
    let edad = parseInt(prompt("Ingrese su edad:"));

    if (edad >= 0 && edad <= 12) {
        alert("Hey " + nombre + " " + apellido + ", " + sexo + " Estás en la categoría: niño.");
    } else if (edad >= 13 && edad <= 18) {
        alert("Hey " + nombre + " " + apellido + ", " + sexo + " Estás en la categoría: adolescente.");
    } else if (edad >= 19 && edad <= 29) {
        alert("Hey " + nombre + " " + apellido + ", " + sexo + " Estás en la categoría: joven.");
    } else if (edad >= 30 && edad <= 69) {
        alert("Hey " + nombre + " " + apellido + ", " + sexo + " Estás en la categoría: adulto.");
    } else {
        alert("Hey " + nombre + " " + apellido + ", " + sexo + " Estás en la categoría: adulto mayor.");
    }
}
