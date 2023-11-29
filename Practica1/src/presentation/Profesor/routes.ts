import { Router } from 'express';
import { ProfesorController } from './controller';


export class ProfesorRoutes {


  static get routes(): Router {

    const router = Router();

    const profesorController= new ProfesorController();

    router.get('/', profesorController.getProfesor );
    router.get('/:id', profesorController.getProfesorById );
    
    router.post('/', profesorController.createProfesor );
    router.put('/:id', profesorController.updateprofesor );
    router.delete('/:id', profesorController.deleteprofesor);


    return router;
  }


}

