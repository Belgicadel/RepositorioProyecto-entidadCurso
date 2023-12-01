export class CreatetipocursoDto {

  private constructor(
    public readonly nombre  : string,
  ){}


  static create( props: {[key:string]: any} ): [string?, CreatetipocursoDto?]  {

    const { nombre,} = props;

    if ( !nombre  ) return ['nombre  property is required', undefined];

    return [undefined, new CreatetipocursoDto(nombre,)];
  }


}