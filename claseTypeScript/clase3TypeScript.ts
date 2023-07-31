interface Persona {
    edad: number;
    nombre: string;
}

interface Alumno extends Persona {
    materiaCursando: Materia;
    direccion: string;
    añoInscripcion: number;
}


// interface Profesor extends Persona {
//     materias: Materia;
//     curso: string;
// }

enum Materia {
    Matematica,
    Fisica,
    Quimica
}

const AlumnoEjemplo: Alumno = {
    materiaCursando: Materia.Matematica,
    edad: 29,
    nombre: "José",
    direccion: "San Luis 2400",
    añoInscripcion: 2023
}

interface Point {
    x: number;
    y: number;
    z?: number;
}
const puntoRequerido: Required<Point> = { //required hacer que todos los items sean requeridos por mas que sean opcionales
    x: 1,
    y: 2,
    z: 3,
}

const puntoParcial: Partial<Point> = { //partial hace que no sea necesario poner todos los parametros
    x: 1,
}

const puntoPick: Pick<Point, "x" | "z"> = { //pick hace que solamente el que vos le digas te pida
    x: 1,
    z: 2
}

const puntoOmit: Omit<Point, "x"> = { //omit hace que no puedas poner el que vos le aclares
    z: 1,
    y: 22,
}

// Ejercicio 3: Crear un tipo Merge
// En este ejercicio, crearás un tipo de utilidad llamado Merge que tomará dos tipos y los combinará.

type tipoUno = {
    nombre:string,

}

type tipoDos = {
    edad:number
}

type Merge<X, Y> = X & Y

const nuevaConst: Merge<Point,Alumno> = {
    añoInscripcion: 2023,
    direccion:"San Luis",
    edad:23,
    materiaCursando:Materia.Quimica,
    nombre:"Pablo",
    x:1,
    y:1,
    z:1,
}