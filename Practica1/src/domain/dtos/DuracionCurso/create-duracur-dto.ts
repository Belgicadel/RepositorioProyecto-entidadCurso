export class CreateDuracurDto {
  private constructor(
    public readonly cursoDuracion: string
  ){}
  static create( props: {[key:string]: any} ): [string?, CreateDuracurDto?]  {

    const { cursoDuracion } = props;

    if ( !cursoDuracion ) return ['name property is required', undefined];


    return [undefined, new CreateDuracurDto(cursoDuracion)];
  }
}