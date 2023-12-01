import { CreatetipocursoDto, UpdatetipocursoDto } from '../dtos';
import { TipocursoEntity } from '../entities/tipocurso.entity';



export abstract class TipocursoRepository {

  abstract create( createCustomerDto: CreatetipocursoDto ): Promise<TipocursoEntity>;

  abstract getAll(): Promise<TipocursoEntity[]>;

  abstract findById( id: number ): Promise<TipocursoEntity>;
  abstract updateById( UpdatetipocursoDto: UpdatetipocursoDto ): Promise<TipocursoEntity>;
  abstract deleteById( id: number ): Promise<TipocursoEntity>;

}