class Estudiante {
constructor() {
    this.nombre = '';
    this.asignaturas = ['Javascript', 'HTML', 'CSS']; }

obtenDatos() 
{
    return {
    nombre: this.nombre,
    asignaturas: this.asignaturas };
}}

const estudiante = new Estudiante();
estudiante.nombre = 'Guada';
const datosEstudiante = estudiante.obtenDatos();
console.log(datosEstudiante);