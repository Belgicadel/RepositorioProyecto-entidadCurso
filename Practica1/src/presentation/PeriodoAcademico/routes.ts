import { Router } from 'express';
import { PeriodoAcademicoController } from './controller';


export class PeriodoAcademicoRoutes {


  static get routes(): Router {

    const router = Router();

    const periodoAcademicoController= new PeriodoAcademicoController();

    router.get('/', periodoAcademicoController.getPeriodoAcademico );
    router.get('/:id', periodoAcademicoController.getPeriodoAcademicoById );
    
    router.post('/', periodoAcademicoController.createPeriodoAcademico );
    router.put('/:id', periodoAcademicoController.updatePeriodoAcademico );
    router.delete('/:id', periodoAcademicoController.deletePeriodoAcademico);


    return router;
  }


}

