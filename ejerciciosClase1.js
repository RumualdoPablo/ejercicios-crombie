function calcularArea(radio) {
    return Math.PI*(radio**2)
}

// console.log(calcularArea(5))

function listadoDeProfes(lista) {
    console.log("Los profes son", lista[0], lista[lista.length - 1])
}

const profes = ["Pablo","Juani","Jose","Carlos"]

listadoDeProfes(profes);

const alumno = {
    nombre: "Pablo",
    apellido: "Rumualdo",
    lenguajeProgramacion: "Javascript",
    edad: 23
}

function datosAlumno(alumno) {
    console.log(alumno.nombre ,"utiliza el lenguaje", alumno.lenguajeProgramacion)
}

datosAlumno(alumno)