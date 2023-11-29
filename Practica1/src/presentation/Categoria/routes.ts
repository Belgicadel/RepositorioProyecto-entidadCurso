import { Router } from 'express';
import { CategoriaController } from './controller';


export class CategoriaRoutes {


  static get routes(): Router {

    const router = Router();

    const categoriaController= new CategoriaController();

    router.get('/', categoriaController.getCategoria );
    router.get('/:id', categoriaController.getCategoriaById );
    
    router.post('/', categoriaController.createCategoria );
    router.put('/:id', categoriaController.updatecategoria );
    router.delete('/:id', categoriaController.deletecategoria);


    return router;
  }


}

