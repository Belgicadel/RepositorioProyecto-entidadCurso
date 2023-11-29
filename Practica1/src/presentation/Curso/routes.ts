import { Router } from 'express';
import { CursoController } from './controller';


export class CursoRoutes {


  static get routes(): Router {

    const router = Router();

    const cursoController= new CursoController();

    router.get('/', cursoController.getCurso );
    router.get('/:id', cursoController.getCursoById );
    
    router.post('/', cursoController.createCurso );
    router.put('/:id', cursoController.updatecurso );
    router.delete('/:id', cursoController.deletecurso);


    return router;
  }


}

