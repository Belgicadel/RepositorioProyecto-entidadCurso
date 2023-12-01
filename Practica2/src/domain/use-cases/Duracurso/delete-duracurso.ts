import { DuracuroEntity } from '../../entities/duracurso.entity';
import { DuracursoRepository } from '../../repositories/duracurso.repository';


export interface DeleteDuracursoUseCase {
  execute( id: number ): Promise<DuracuroEntity>
}

export class DeleteDuracurso implements DeleteDuracursoUseCase {
  
  constructor(
    private readonly repository: DuracursoRepository,
  ) {}
  
  execute( id: number ): Promise<DuracuroEntity> {
    return this.repository.deleteById(id);
  }

}

