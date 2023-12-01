import {TipocursoEntity } from '../../entities/tipocurso.entity';
import { TipocursoRepository } from '../../repositories/Tipocurso.repository';


export interface GetTipocursoUseCase {
  execute( id: number ): Promise<TipocursoEntity>
}


export class GetTipocurso implements GetTipocursoUseCase {
  
  constructor(
    private readonly repository: TipocursoRepository,
  ) {}
  
  execute( id: number ): Promise<TipocursoEntity> {
    return this.repository.findById(id);
  }

}

