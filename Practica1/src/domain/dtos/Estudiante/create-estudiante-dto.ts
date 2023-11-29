export class CreateEstudianteDto {

  private constructor(
    public readonly nombre_es: string,
    public readonly apellido_es: string,
    public readonly cedula_es: string,
    public readonly edad_es: Date,
    public readonly correo_es: string,
    public readonly idDatos_personal: number,
  ) { }

  static create(props: { [key: string]: any }): [string?, CreateEstudianteDto?] {

    const { nombre_es, apellido_es, cedula_es, edad_es, correo_es, idDatos_personal, } = props;

    if (!nombre_es) return ['nombre  property is required', undefined];
    if (!apellido_es) return ['apellido  property is required', undefined];
    if (!cedula_es) return ['cedula  property is required', undefined];
    if (!edad_es) return ['edad  property is required', undefined];
    if (!correo_es) return ['correo  property is required', undefined];
    if (!idDatos_personal) return ['idDatos_personal  property is required', undefined];



    return [undefined, new CreateEstudianteDto(nombre_es, apellido_es, cedula_es, edad_es, correo_es, idDatos_personal)];
  }


}