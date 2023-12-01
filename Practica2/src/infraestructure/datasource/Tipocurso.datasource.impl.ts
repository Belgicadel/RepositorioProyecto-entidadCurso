import { prisma } from '../../data/postgres';
import { CreatetipocursoDto, TipocursoDatasource, TipocursoEntity, UpdatetipocursoDto } from '../../domain';




export class TipocursoDatasourceImpl implements TipocursoDatasource {

  async create( createtipocursoDto: CreatetipocursoDto ): Promise<TipocursoEntity> {
    const tipocurso = await prisma.tipo_curso.create({
      data: createtipocursoDto!
    });

    return TipocursoEntity.fromObject( tipocurso );
  }

  async getAll(): Promise<TipocursoEntity[]> {
    const tipocurso = await prisma.tipo_curso.findMany();
    return tipocurso.map( tipocurso => TipocursoEntity.fromObject(tipocurso) );
  }

  async findById( id: number ): Promise<TipocursoEntity> {
    const tipocurso = await prisma.tipo_curso.findFirst({
      where: { id }
    });

    if ( !tipocurso ) throw `Tipocurso with id ${ id } not found`;
    return TipocursoEntity.fromObject(tipocurso);
  }

  async updateById( updatetipocursoDto: UpdatetipocursoDto ): Promise<TipocursoEntity> {
    await this.findById( updatetipocursoDto.id );
    
    const updatedTipocurso = await prisma.tipo_curso.update({
      where: { id: updatetipocursoDto.id },
      data: updatetipocursoDto!.values
    });

    return TipocursoEntity.fromObject(updatedTipocurso);
  }

  async deleteById( id: number ): Promise<TipocursoEntity> {
    await this.findById( id );
    const deleted = await prisma.tipo_curso.delete({
      where: { id }
    });

    return TipocursoEntity.fromObject( deleted );
  }

}