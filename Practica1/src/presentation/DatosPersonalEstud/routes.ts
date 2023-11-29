import { Router } from 'express';
import { DatosPersonalesEstudController } from './controller';


export class DatosPersonalesEstudRoutes {


  static get routes(): Router {

    const router = Router();

    const datosPersonalesEstudController= new DatosPersonalesEstudController();

    router.get('/', datosPersonalesEstudController.getDatosPersonalesEstud );
    router.get('/:id', datosPersonalesEstudController.getDatosPersonalesEstudById );
    
    router.post('/', datosPersonalesEstudController.createDatosPersonalesEstud );
    router.put('/:id', datosPersonalesEstudController.updateDatosPersonalesEstud );
    router.delete('/:id', datosPersonalesEstudController.deleteDatosPersonalesEstud);


    return router;
  }
}