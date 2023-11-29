export class UpdatecursoDto {

  private constructor(
    public readonly id: number,
    public readonly nombre_curso: string,
    public readonly id_instrumento  : number,
    public readonly id_Profesor  : number,
    public readonly id_tipo_curso  : number,
    public readonly id_duracur  : number,
  ){}

  get values() {
    const returnObj: {[key: string]: any} = {};

    if ( this.id) returnObj.id = this.id;
    if ( this.nombre_curso) returnObj.nombre_curso = this.nombre_curso;
    if ( this.id_instrumento) returnObj.id_instrumento = this.id_instrumento;
    if ( this.id_Profesor) returnObj.id_Profesor = this.id_Profesor;
    if ( this.id_tipo_curso) returnObj.id_tipo_curso = this.id_tipo_curso;
    if ( this.id_duracur) returnObj.id_duracur = this.id_duracur;
    return returnObj;
  }


  static create( props: {[key:string]: any} ): [string?, UpdatecursoDto?]  {

    const { id, nombre_curso, id_instrumento, id_Profesor, id_tipo_curso, id_duracur} = props;

    if ( !id || isNaN( Number(id)) ) {
      return ['id must be a valid number'];
    }

    if ( !id && !nombre_curso && !id_instrumento && !id_Profesor && !id_tipo_curso && !id_duracur) {
      return ['At least one property must be provided'];
    }
    return [undefined, new UpdatecursoDto(id, nombre_curso, id_instrumento, id_Profesor, id_tipo_curso, id_duracur)];
  }


}