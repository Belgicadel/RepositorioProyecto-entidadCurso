import { TipocursoEntity } from '../../entities/tipocurso.entity';
import { TipocursoRepository } from '../../repositories/Tipocurso.repository';


export interface GetTipocursosUseCase {
  execute(): Promise<TipocursoEntity[]>
}


export class GetTipocursos implements GetTipocursosUseCase {
  
  constructor(
    private readonly repository: TipocursoRepository,
  ) {}
  
  execute(): Promise<TipocursoEntity[]> {
    return this.repository.getAll();
  }

}

