import { CreatetipocursoDto, TipocursoDatasource, TipocursoEntity, TipocursoRepository, UpdatetipocursoDto } from '../../domain';


export class TipocursoRepositoryImpl implements TipocursoRepository {

  constructor(
    private readonly datasource: TipocursoDatasource,
  ) { }


  create( createtipocursoDto: CreatetipocursoDto ): Promise<TipocursoEntity> {
    return this.datasource.create( createtipocursoDto );
  }

  getAll(): Promise<TipocursoEntity[]> {
    return this.datasource.getAll();
  }

  findById( id: number ): Promise<TipocursoEntity> {
    return this.datasource.findById( id );
  }

  updateById( updatetipocursoDto: UpdatetipocursoDto ): Promise<TipocursoEntity> {
    return this.datasource.updateById( updatetipocursoDto );
  }

  deleteById( id: number ): Promise<TipocursoEntity> {
    return this.datasource.deleteById( id );
  }

}


