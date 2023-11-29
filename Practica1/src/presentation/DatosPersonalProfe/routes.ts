import { Router } from 'express';
import { DatosPersonalesProfeController } from './controller';


export class DatosPersonalesProfeRoutes {


  static get routes(): Router {

    const router = Router();

    const datosPersonalesProfeController= new DatosPersonalesProfeController();

    router.get('/', datosPersonalesProfeController.getDatosPersonalesProfe );
    router.get('/:id', datosPersonalesProfeController.getDatosPersonalesProfeById );
    
    router.post('/', datosPersonalesProfeController.createDatosPersonalesProfe );
    router.put('/:id', datosPersonalesProfeController.updateDatosPersonalesProfe );
    router.delete('/:id', datosPersonalesProfeController.deleteDatosPersonalesProfe);


    return router;
  }

}