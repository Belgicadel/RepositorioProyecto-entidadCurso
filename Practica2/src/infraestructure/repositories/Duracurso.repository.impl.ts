import { CreateduracurDto, DuracursoDatasource, DuracuroEntity, DuracursoRepository, UpdateduracurDto } from '../../domain';


export class DuracursoRepositoryImpl implements DuracursoRepository {

  constructor(
    private readonly datasource: DuracursoDatasource,
  ) { }


  create( CreateduracurDto: CreateduracurDto ): Promise<DuracuroEntity> {
    return this.datasource.create( CreateduracurDto );
  }

  getAll(): Promise<DuracuroEntity[]> {
    return this.datasource.getAll();
  }

  findById( id: number ): Promise<DuracuroEntity> {
    return this.datasource.findById( id );
  }

  updateById( UpdateduracursoDto: UpdateduracurDto ): Promise<DuracuroEntity> {
    return this.datasource.updateById( UpdateduracursoDto );
  }

  deleteById( id: number ): Promise<DuracuroEntity> {
    return this.datasource.deleteById( id );
  }

}


