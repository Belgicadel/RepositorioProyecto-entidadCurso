import { Router } from 'express';

import { CategoriaRoutes } from './Categoria/routes';
import { CursoRoutes } from './Curso/routes';
import { DatosPersonalesEstudRoutes } from './DatosPersonalEstud/routes';
import { DatosPersonalesProfeRoutes } from './DatosPersonalProfe/routes';
import { DuracurRoutes } from './DuraCurso/routes';
import { EstudianteRoutes } from './Estudiante/routes';
import { FormacionProfecionalRoutes } from './FormacionProfecional/routes';
import { FormaPagoRoutes } from './FormaPago/routes';
import { InstrumentoRoutes } from './Instrumento/routes';
import { MatriculaRoutes } from './Matricula/routes';
import { PeriodoAcademicoRoutes } from './PeriodoAcademico/routes';
import { ProfesorRoutes } from './Profesor/routes';
import { TipocursoRoutes } from './Tipocurso/routes';
import { TipoInstrumentoRoutes } from './TipoInstrumento/routes';
import { UbicacionRoutes } from './Ubicacion/routes';

export class AppRoutes {

  static get routes(): Router {

    const router = Router();

    router.use('/api/categorias', CategoriaRoutes.routes );
    router.use('/api/cursos', CursoRoutes.routes );
    router.use('/api/datosPersonalesEstudiantes', DatosPersonalesEstudRoutes.routes );
    router.use('/api/datosPersonalesProfesores', DatosPersonalesProfeRoutes.routes );
    router.use('/api/duracursos', DuracurRoutes.routes );
    router.use('/api/estudiantes', EstudianteRoutes.routes );
    router.use('/api/formacionProfecionales', FormacionProfecionalRoutes.routes );
    router.use('/api/formaPagos', FormaPagoRoutes.routes );
    router.use('/api/instrumentos', InstrumentoRoutes.routes );
    router.use('/api/matriculas', MatriculaRoutes.routes );
    router.use('/api/periodoAcademicos', PeriodoAcademicoRoutes.routes );
    router.use('/api/profesores', ProfesorRoutes.routes );
    router.use('/api/tipoCursos', TipocursoRoutes.routes );
    router.use('/api/tipoInstrumentos', TipoInstrumentoRoutes.routes );
    router.use('/api/ubicaciones', UbicacionRoutes.routes );    
    return router;
  }


}

