import { Router } from 'express';
import { InstrumentoController } from './controller';


export class InstrumentoRoutes {


  static get routes(): Router {

    const router = Router();

    const instrumentoController= new InstrumentoController();

    router.get('/', instrumentoController.getInstrumento );
    router.get('/:id', instrumentoController.getInstrumentoById );
    
    router.post('/', instrumentoController.createInstrumento );
    router.put('/:id', instrumentoController.updateinstrumento );
    router.delete('/:id', instrumentoController.deleteinstrumento);


    return router;
  }


}

