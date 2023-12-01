import { UpdateduracurDto } from '../../dtos';
import { DuracuroEntity } from '../../entities/duracurso.entity';
import { DuracursoRepository } from '../../repositories/duracurso.repository';


export interface UpdateduracursoUseCase {
  execute( dto: UpdateduracurDto ): Promise<DuracuroEntity>
}


export class UpdateDuracurso implements UpdateduracursoUseCase {
  
  constructor(
    private readonly repository: DuracursoRepository,
  ) {}
  
  execute( dto: UpdateduracurDto ): Promise<DuracuroEntity> {
    return this.repository.updateById(dto);
  }

}

