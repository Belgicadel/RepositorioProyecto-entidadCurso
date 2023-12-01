export class CreateduracurDto {
    private constructor(
      public readonly cursoDuracion: number,
    ){}
  
    static create(props: { [key: string]: any }): [string?, CreateduracurDto?] {
      const { cursoDuracion } = props;
  
      if ( !cursoDuracion ) return ['CursoDuracion property is required', undefined];
      
      return [undefined, new CreateduracurDto(cursoDuracion)];
    }
  }

  