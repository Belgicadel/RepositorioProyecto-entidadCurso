import { Router } from 'express';
import { UbicacionController } from './controller';


export class UbicacionRoutes {


  static get routes(): Router {

    const router = Router();

    const ubicacionController= new UbicacionController();

    router.get('/', ubicacionController.getUbicacion );
    router.get('/:id', ubicacionController.getUbicacionById );
    
    router.post('/', ubicacionController.createUbicacion );
    router.put('/:id', ubicacionController.updateUbicacion );
    router.delete('/:id', ubicacionController.deleteUbicacion);


    return router;
  }


}
