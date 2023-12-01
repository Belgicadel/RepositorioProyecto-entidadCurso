import {DuracuroEntity } from '../../entities/duracurso.entity';
import { DuracursoRepository } from '../../repositories/duracurso.repository';


export interface GetDuracursoUseCase {
  execute( id: number ): Promise<DuracuroEntity>
}


export class GetDuracurso implements GetDuracursoUseCase {
  
  constructor(
    private readonly repository: DuracursoRepository,
  ) {}
  
  execute( id: number ): Promise<DuracuroEntity> {
    return this.repository.findById(id);
  }

}

