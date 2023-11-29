export class UpdateUbicacionEstudDto {

    private constructor(
      public readonly id: number,
      public readonly provincia: string,
      public readonly ciudad: string,

    ){}
  
    get values() {
      const returnObj: {[key: string]: any} = {};
      if ( this.id) returnObj.id = this.id;
      if ( this.provincia) returnObj.provincia = this.provincia;
      if ( this.ciudad) returnObj.ciudad = this.ciudad;

      return returnObj;
    }
  
  
    static create( props: {[key:string]: any} ): [string?, UpdateUbicacionEstudDto?]  {
  
      const { id, provincia, ciudad} = props;
  
      if ( !id || isNaN( Number(id)) ) {
        return ['id must be a valid number'];
      }
  
      if ( !id && !provincia && !ciudad ) {
        return ['At least one property must be provided'];
      }
      return [undefined, new UpdateUbicacionEstudDto(id, provincia, ciudad)];
    }
  
  
  }