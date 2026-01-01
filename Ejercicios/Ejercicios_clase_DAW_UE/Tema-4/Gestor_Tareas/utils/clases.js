// Clase Tarea
class Tarea {
  constructor(
    id,
    titulo,
    descripcion,
    fecha,
    esPrioritaria,
    prioridad,
    urlImagen
  ) {
    this.id = id;
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.fecha = fecha;
    this.esPrioritaria = esPrioritaria;
    this.prioridad = prioridad;
    this.completa = false;

    // Imagen: si se proporciona URL, se usa; si no, según prioridad
    this.imagen = urlImagen
      ? urlImagen
      : prioridad === "alta"
      ? "https://via.placeholder.com/100/ff0000/ffffff?text=Alta"
      : prioridad === "media"
      ? "https://via.placeholder.com/100/ffa500/ffffff?text=Media"
      : "https://via.placeholder.com/100/008000/ffffff?text=Baja";
  }
}
