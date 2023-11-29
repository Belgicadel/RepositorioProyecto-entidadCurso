import { Router } from 'express';
import { DuraCurController} from './controller';


export class DuracurRoutes {


  static get routes(): Router {

    const router = Router();

    const DuraCurControllers= new DuraCurController();

    router.get('/', DuraCurControllers.getDuracurso );
    router.get('/:id', DuraCurControllers.getDuracursobyId);
    
    router.post('/', DuraCurControllers.createduracur );
    router.put('/:id', DuraCurControllers.updateduracur );
    router.delete('/:id', DuraCurControllers.deleteduracur);


    return router;
  }


}

