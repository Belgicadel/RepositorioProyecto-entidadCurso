import { Router } from 'express';
import { TipoInstrumentoController } from './controller';


export class TipoInstrumentoRoutes {


  static get routes(): Router {

    const router = Router();

    const tipoinstrumentoController= new TipoInstrumentoController();

    router.get('/', tipoinstrumentoController.getTipoInstrumento );
    router.get('/:id', tipoinstrumentoController.getTipoInstrumentoById );
    
    router.post('/', tipoinstrumentoController.createTipoInstrumento );
    router.put('/:id', tipoinstrumentoController.updatetipoinstrumento );
    router.delete('/:id', tipoinstrumentoController.deletetipoinstrumento);


    return router;
  }


}

