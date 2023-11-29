import { Router } from 'express';
import { TipocursoController } from './controller';


export class TipocursoRoutes {


  static get routes(): Router {

    const router = Router();

    const tipocursoController= new TipocursoController();

    router.get('/',tipocursoController.getTipoCurso);
    router.get('/:id', tipocursoController.gettipocursoById );
    
    router.post('/', tipocursoController.createTipocur );
    router.put('/:id', tipocursoController.updatetipocurso );
    router.delete('/:id', tipocursoController.deletetipocur);


    return router;
  }


}

