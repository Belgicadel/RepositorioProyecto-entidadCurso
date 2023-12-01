import { prisma } from '../../data/postgres';
import { CreateduracurDto, DuracursoDatasource, DuracuroEntity, UpdateduracurDto } from '../../domain';




export class DuracursoDatasourceImpl implements DuracursoDatasource {

  async create( CreateduracurDto: CreateduracurDto ): Promise<DuracuroEntity> {
    const duracioncurso = await prisma.duracion_curso.create({
      data: CreateduracurDto!
    });

    return DuracuroEntity.fromObject( duracioncurso );
  }

  async getAll(): Promise<DuracuroEntity[]> {
    const duracioncurso = await prisma.duracion_curso.findMany();
    return duracioncurso.map( duracioncurso => DuracuroEntity.fromObject(duracioncurso) );
  }

  async findById( id: number ): Promise<DuracuroEntity> {
    const duracioncurso = await prisma.duracion_curso.findFirst({
      where: { id }
    });

    if ( !duracioncurso ) throw `duracioncurso with id ${ id } not found`;
    return DuracuroEntity.fromObject(duracioncurso);
  }

  async updateById( UpdateduracurDto: UpdateduracurDto ): Promise<DuracuroEntity> {
    await this.findById( UpdateduracurDto.id );
    
    const updatedduracioncurso = await prisma.duracion_curso.update({
      where: { id: UpdateduracurDto.id },
      data: UpdateduracurDto!.values
    });

    return DuracuroEntity.fromObject(updatedduracioncurso);
  }

  async deleteById( id: number ): Promise<DuracuroEntity> {
    await this.findById( id );
    const deleted = await prisma.duracion_curso.delete({
      where: { id }
    });

    return DuracuroEntity.fromObject( deleted );
  }

}