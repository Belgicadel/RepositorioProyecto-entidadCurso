export class UpdateFormaPagoDto {

    private constructor(
      public readonly id: number,
      public readonly nombre_pago: string,
    ){}
  
    get values() {
      const returnObj: {[key: string]: any} = {};

      if ( this.id) returnObj.id = this.id;
      if ( this.nombre_pago) returnObj.nombre_pago = this.nombre_pago;
      return returnObj;
    }
  
  
    static create( props: {[key:string]: any} ): [string?, UpdateFormaPagoDto?]  {
  
      const { id, nombre_pago} = props;
  
      if ( !id || isNaN( Number(id)) ) {
        return ['id must be a valid number'];
      }
  
      if ( !id && !nombre_pago) {
        return ['At least one property must be provided'];
      }
      return [undefined, new UpdateFormaPagoDto(id, nombre_pago)];
    }
  
  
  }