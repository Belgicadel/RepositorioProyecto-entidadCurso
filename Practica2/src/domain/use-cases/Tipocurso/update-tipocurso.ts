import { UpdatetipocursoDto } from '../../dtos';
import { TipocursoEntity } from '../../entities/tipocurso.entity';
import { TipocursoRepository } from '../../repositories/Tipocurso.repository';


export interface UpdatecursoUseCase {
  execute( dto: UpdatetipocursoDto ): Promise<TipocursoEntity>
}


export class UpdateTipocurso implements UpdatecursoUseCase {
  
  constructor(
    private readonly repository: TipocursoRepository,
  ) {}
  
  execute( dto: UpdatetipocursoDto ): Promise<TipocursoEntity> {
    return this.repository.updateById(dto);
  }

}

