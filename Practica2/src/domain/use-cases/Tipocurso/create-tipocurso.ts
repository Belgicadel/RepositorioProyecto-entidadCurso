import { CreatetipocursoDto } from '../../dtos';
import { TipocursoEntity } from '../../entities/tipocurso.entity';
import { TipocursoRepository } from '../../repositories/Tipocurso.repository';


export interface CreateTipocursoUseCase {
  execute( dto: CreatetipocursoDto ): Promise<TipocursoEntity>
}

// ctrl+ shift + l
export class CreateTipocurso implements CreateTipocursoUseCase {
  
  constructor(
    private readonly repository: TipocursoRepository,
  ) {}
  
  execute( dto: CreatetipocursoDto ): Promise<TipocursoEntity> {
    return this.repository.create(dto);
  }

}

