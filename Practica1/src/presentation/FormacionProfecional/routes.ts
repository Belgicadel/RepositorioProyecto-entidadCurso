import { Router } from 'express';
import { FormacionProfecionalController } from './controller';


export class FormacionProfecionalRoutes {


  static get routes(): Router {

    const router = Router();

    const formacionProfecionalController= new FormacionProfecionalController();

    router.get('/', formacionProfecionalController.getFormacionProfecional );
    router.get('/:id', formacionProfecionalController.getFormacionProfecionalById );
    
    router.post('/', formacionProfecionalController.createFormacionProfecional );
    router.put('/:id', formacionProfecionalController.updateFormacionProfecional );
    router.delete('/:id', formacionProfecionalController.deleteFormacionProfecional);


    return router;
  }


}
