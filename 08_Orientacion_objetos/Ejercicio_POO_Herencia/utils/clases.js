class Persona {
  constructor(nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
  }

  mostrarDatos() {
    return `${this.nombre} ${this.apellido} (${this.edad} años)`;
  }

  infoExtra() {
    return "";
  }
}

class Estudiante extends Persona {
  constructor(nombre, apellido, edad, curso) {
    super(nombre, apellido, edad);
    this.curso = curso;
  }

  infoExtra() {
    return `Curso: ${this.curso}`;
  }
}

class Empleado extends Persona {
  constructor(nombre, apellido, edad, departamento) {
    super(nombre, apellido, edad);
    this.departamento = departamento;
  }

  infoExtra() {
    return `Departamento: ${this.departamento}`;
  }
}
