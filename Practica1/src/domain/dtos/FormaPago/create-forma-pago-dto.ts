export class CreateFormaPagoDto {

    private constructor(
      public readonly nombre_pago  : string,

    ){}
  
  
    static create( props: {[key:string]: any} ): [string?, CreateFormaPagoDto?]  {
  
      const { nombre_pago   } = props;
  
      if ( !nombre_pago  ) return ['nombre_pago  property is required', undefined];
  
      return [undefined, new CreateFormaPagoDto(nombre_pago)];
    }
  
  
  }