// Ejercicio 1!
const alumnos = [
    {
        nombre: "Jose",
        nota: 10,
    },
    {
        nombre: "pepe",
        nota: 5,
    },
    {
        nombre: "Carlos",
        nota: 1,
    },
    {
        nombre: "Maria",
        nota: 9,
    },
];

let notaMayor = 0;
let nombreNotaMayor = "";

alumnos.forEach(alumno => {
    if(alumno.nota > notaMayor){
        notaMayor = alumno.nota;
        nombreNotaMayor = alumno.nombre
    }
});

// console.log("La nota mayor es de: ", nombreNotaMayor);

// for (let i = 0; i < alumnos.length; i++) {
//     let alumnoConMasNota = 0;
//     if (alumnos[i].nota > alumnoConMasNota) {
//         alumnoConMasNota = alumnos[i].nombre
//         console.log(alumnoConMasNota)
//     }

// }



// // Ejercicio 3

let stringConMayus = "LaCrOmbiNeTa"
const arrLetras = []

for (let i = 0; i < stringConMayus.length; i++) {
    if (stringConMayus[i] === stringConMayus[i].toUpperCase()) {
        arrLetras.push(stringConMayus[i])
    }
}

console.log(arrLetras)

