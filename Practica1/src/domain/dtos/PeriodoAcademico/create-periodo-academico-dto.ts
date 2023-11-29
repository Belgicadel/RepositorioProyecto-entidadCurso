export class CreatePeriodoAcademicoDto {

    private constructor(
      public readonly nombre_p_academico  : string,

    ){}
  
  
    static create( props: {[key:string]: any} ): [string?, CreatePeriodoAcademicoDto?]  {
  
      const { nombre_p_academico   } = props;
  
      if ( !nombre_p_academico  ) return ['nombre_p_academico  property is required', undefined];
  
      return [undefined, new CreatePeriodoAcademicoDto(nombre_p_academico)];
    }
  
  
  }