import { Router } from 'express';
import { TipocursoController } from './controller';
import { TipocursoDatasourceImpl } from '../../infraestructure/datasource/Tipocurso.datasource.impl';
import { TipocursoRepositoryImpl } from '../../infraestructure/repositories/Tipocurso.repository.impl';


export class TipocursoRoutes {


  static get routes(): Router {

    const router = Router();

    const datasource = new TipocursoDatasourceImpl();
    const tipocursoRepositoryImpl = new TipocursoRepositoryImpl( datasource );
    const tipocursoController = new TipocursoController(tipocursoRepositoryImpl);

    router.get('/', tipocursoController.getTipocurso );
    router.get('/:id', tipocursoController.getTipocursoById );
    
    router.post('/', tipocursoController.createTipocurso );
    router.put('/:id', tipocursoController.updateTipocurso );
    router.delete('/:id', tipocursoController.deleteTipocurso );


    return router;
  }


}

