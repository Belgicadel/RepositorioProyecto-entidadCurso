import { DuracuroEntity } from '../../entities/duracurso.entity';
import { DuracursoRepository } from '../../repositories/duracurso.repository';


export interface GetDuracursosUseCase {
  execute(): Promise<DuracuroEntity[]>
}


export class GetDuracursos implements GetDuracursosUseCase {
  
  constructor(
    private readonly repository: DuracursoRepository,
  ) {}
  
  execute(): Promise<DuracuroEntity[]> {
    return this.repository.getAll();
  }

}

