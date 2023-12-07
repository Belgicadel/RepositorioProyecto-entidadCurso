interface ICurso {
  id?: number;
  nombre_curso: string;
  id_instrumento: number;
  id_Profesor: number;
  id_tipo_curso: number;
  id_duracur: number;

  // Campos adicionales de las relaciones
  Tipo_curso?: {
    nombre: string;
  };
  
  Duracion_curso?: {
    cursoDuracion: string;
  };
}
