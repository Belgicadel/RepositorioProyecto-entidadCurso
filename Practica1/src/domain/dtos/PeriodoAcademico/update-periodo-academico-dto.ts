export class UpdatePeriodoAcademicoDto {

    private constructor(
      public readonly id: number,
      public readonly nombre_p_academico: string,
    ){}
  
    get values() {
      const returnObj: {[key: string]: any} = {};
      
      if ( this.id) returnObj.id = this.id;
      if ( this.nombre_p_academico) returnObj.nombre_p_academico = this.nombre_p_academico;
      return returnObj;
    }
  
  
    static create( props: {[key:string]: any} ): [string?, UpdatePeriodoAcademicoDto?]  {
  
      const { id, nombre_p_academico} = props;
  
      if ( !id || isNaN( Number(id)) ) {
        return ['id must be a valid number'];
      }
  
      if ( !id && !nombre_p_academico) {
        return ['At least one property must be provided'];
      }
      return [undefined, new UpdatePeriodoAcademicoDto(id, nombre_p_academico)];
    }
  
  
  }