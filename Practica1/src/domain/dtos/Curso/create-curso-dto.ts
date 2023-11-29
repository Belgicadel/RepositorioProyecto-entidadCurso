// create-curso.dto.ts
export class CreatecursoDto {
  public constructor(
    public readonly nombre_curso: string,
    public readonly id_instrumento: number,
    public readonly id_Profesor: number,
    public readonly id_tipo_curso: number,
    public readonly id_duracur: number,
    
  ) {}

  static create(props: { [key: string]: any }): [string?, CreatecursoDto?] {
    const { nombre_curso, id_instrumento, id_Profesor, id_tipo_curso, id_duracur } = props;

    if (!nombre_curso) return ['nombre_curso property is required', undefined];
    if (!id_instrumento) return ['id_instrumento property is required', undefined];
    if (!id_Profesor) return ['id_Profesor property is required', undefined];
    if (!id_tipo_curso) return ['id_tipo_curso property is required', undefined];
    if (!id_duracur) return ['id_duracur property is required', undefined];

    return [
      undefined,
      new CreatecursoDto(nombre_curso, id_instrumento, id_Profesor, id_tipo_curso, id_duracur),
    ];
  }
}
