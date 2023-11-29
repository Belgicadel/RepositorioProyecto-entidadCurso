import { Router } from 'express';
import { FormaPagoController } from './controller';


export class FormaPagoRoutes {


  static get routes(): Router {

    const router = Router();

    const formaPagoController= new FormaPagoController();

    router.get('/', formaPagoController.getFormaPago );
    router.get('/:id', formaPagoController.getFormaPagoById );
    
    router.post('/', formaPagoController.createFormaPago );
    router.put('/:id', formaPagoController.updateFormaPago );
    router.delete('/:id', formaPagoController.deleteFormaPago);


    return router;
  }


}

