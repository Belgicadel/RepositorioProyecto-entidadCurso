import { Router } from 'express';

import { TipocursoRoutes } from './Tipocurso/routes';
import { DuracurRoutes } from './Duracurso/routes';


export class AppRoutes {


  static get routes(): Router {

    const router = Router();

    router.use('/api/tipocurso', TipocursoRoutes.routes );
    router.use('/api/duracursos', DuracurRoutes.routes );
    
    return router;
  }


}

