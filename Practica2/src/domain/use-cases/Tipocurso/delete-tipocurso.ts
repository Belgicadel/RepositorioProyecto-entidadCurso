import { TipocursoEntity } from '../../entities/tipocurso.entity';
import { TipocursoRepository } from '../../repositories/Tipocurso.repository';


export interface DeleteTipocursoUseCase {
  execute( id: number ): Promise<TipocursoEntity>
}

export class DeleteTipocurso implements DeleteTipocursoUseCase {
  
  constructor(
    private readonly repository: TipocursoRepository,
  ) {}
  
  execute( id: number ): Promise<TipocursoEntity> {
    return this.repository.deleteById(id);
  }

}

