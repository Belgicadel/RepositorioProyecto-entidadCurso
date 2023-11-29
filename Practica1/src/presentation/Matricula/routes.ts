import { Router } from 'express';
import { MatriculaController } from './controller';


export class MatriculaRoutes {


  static get routes(): Router {

    const router = Router();

    const matriculaController= new MatriculaController();

    router.get('/', matriculaController.getMatricula );
    router.get('/:id', matriculaController.getMatriculaById );
    
    router.post('/', matriculaController.createMatricula );
    router.put('/:id', matriculaController.updatematricula );
    router.delete('/:id', matriculaController.deletematricula);


    return router;
  }


}

