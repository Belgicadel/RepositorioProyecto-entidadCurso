import { CreateduracurDto, UpdateduracurDto } from '../dtos';
import { DuracuroEntity } from '../entities/duracurso.entity';



export abstract class DuracursoDatasource {

  abstract create( CreatecursoDto: CreateduracurDto ): Promise<DuracuroEntity>;

  abstract getAll(): Promise<DuracuroEntity[]>;

  abstract findById( id: number ): Promise<DuracuroEntity>;
  abstract updateById( UpdateduracurDto: UpdateduracurDto ): Promise<DuracuroEntity>;
  abstract deleteById( id: number ): Promise<DuracuroEntity>;

}