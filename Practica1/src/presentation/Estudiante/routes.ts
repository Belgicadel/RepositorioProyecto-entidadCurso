import { Router } from 'express';
import { EstudianteController } from './controller';


export class EstudianteRoutes {


  static get routes(): Router {

    const router = Router();

    const estudianteController= new EstudianteController();

    router.get('/', estudianteController.getEstudiante );
    router.get('/:id', estudianteController.getEstudianteById );
    
    router.post('/', estudianteController.createEstudiante );
    router.put('/:id', estudianteController.updateestudiante );
    router.delete('/:id', estudianteController.deleteestudiante);


    return router;
  }


}

