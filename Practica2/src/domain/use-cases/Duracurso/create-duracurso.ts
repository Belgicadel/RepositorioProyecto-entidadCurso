import { CreateduracurDto } from '../../dtos';
import { DuracuroEntity } from '../../entities/duracurso.entity';
import { DuracursoRepository } from '../../repositories/duracurso.repository';


export interface CreateDuracursoUseCase {
  execute( dto: CreateduracurDto ): Promise<DuracuroEntity>
}

// ctrl+ shift + l
export class CreateDuracurso implements CreateDuracursoUseCase {
  
  constructor(
    private readonly repository: DuracursoRepository,
  ) {}
  
  execute( dto: CreateduracurDto ): Promise<DuracuroEntity> {
    return this.repository.create(dto);
  }

}

