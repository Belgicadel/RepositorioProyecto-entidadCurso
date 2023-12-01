import { Router } from 'express';
import { DuracursoController } from './controller';
import { DuracursoDatasourceImpl } from '../../infraestructure/datasource/Duracioncurso.datasource.impl';
import { DuracursoRepositoryImpl } from '../../infraestructure/repositories/Duracurso.repository.impl';


export class DuracurRoutes {


  static get routes(): Router {

    const router = Router();

    const datasource = new DuracursoDatasourceImpl();
    const duracursoRepositoryImpl = new DuracursoRepositoryImpl( datasource );
    const duracursoController = new DuracursoController(duracursoRepositoryImpl);

    router.get('/', duracursoController.getDuracurso );
    router.get('/:id', duracursoController.getDuracursoById );
    
    router.post('/', duracursoController.createduracurso );
    router.put('/:id', duracursoController.updateDuracurso );
    router.delete('/:id', duracursoController.deleteDuracurso );


    return router;
  }


}

