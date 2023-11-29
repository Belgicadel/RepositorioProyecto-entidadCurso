import { Request, Response } from 'express';
import { prisma } from '../../data/postgres';
import { CreatecursoDto, UpdatecursoDto } from '../../domain/dtos';


export class CursoController {
  //* DI
  constructor() { }
  public getCurso = async (req: Request, res: Response) => {
    const cursos = await prisma.curso.findMany({
      include: {
        Tipo_curso: {
          select: {
            nombre: true,
          },
        },
        Duracion_curso: {
          select: {
            cursoDuracion: true,
          },
        },
        profesor:{
          select:{
            nombre:true,
          }
        }
      },
    });
    
    return res.json(cursos);
  };
  
  public getCursoById = async( req: Request, res: Response ) => {
    const id = +req.params.id;
    if ( isNaN( id ) ) return res.status( 400 ).json( { error: 'id argument is not a number' } );

    const curso = await prisma.curso.findFirst({
      where: { id }
    });
    
    ( curso )
      ? res.json(curso )
      : res.status( 404 ).json( { error: `Curso with id ${ id } not found` } );
  };
  public createCurso = async( req: Request, res: Response ) => {
    
    const [error, createcursoDto] = CreatecursoDto.create(req.body);
    if ( error ) return res.status(400).json({ error });

    const cursos = await prisma.curso.create({
      data: createcursoDto!
    });

    res.json( cursos );

  };


  public updatecurso = async (req: Request, res: Response) => {
    const id = +req.params.id;
    const [error, updatecursoDto] = UpdatecursoDto.create({ ...req.body, id });
    if (error) return res.status(400).json({ error });

    const cursos = await prisma.curso.findFirst({
      where: { id }
    });
    if (!cursos) return res.status(404).json({ error: `Curso with id ${id} not found` });
    const updatecurso = await prisma.curso.update({
      where: { id },
      data: updatecursoDto!.values
    });
    res.json(updatecurso);
  };


  public deletecurso = async (req: Request, res: Response) => {
    const id = +req.params.id;
    const cursos = await prisma.curso.findFirst({
      where: { id }
    });

    if (!cursos) return res.status(404).json({ error: `Curso with id${id} not found` });
    const deleted = await prisma.curso.delete({
      where: { id }
    });
    (deleted)
      ? res.json(deleted)
      : res.status(400).json({ error: `Curso with id ${id} not found` });
  };
}
