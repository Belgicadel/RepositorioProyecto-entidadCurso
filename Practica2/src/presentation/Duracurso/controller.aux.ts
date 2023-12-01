import { Request, Response } from 'express';
import { prisma } from '../../data/postgres';
import { CreateduracurDto, UpdateduracurDto} from '../../domain/dtos';


export class DuraCurController {
  //* DI
  constructor() { }
  public getDuracurso = async( req: Request, res: Response ) => {
    const duracur = await prisma.duracion_curso.findMany();
    return res.json( duracur);
  };
  public getDuracursobyId = async( req: Request, res: Response ) => {
    const id= +req.params.id;
    if ( isNaN( id ) ) return res.status( 400 ).json( { error: 'id argument is not a number' } );

    const duracur = await prisma.duracion_curso.findFirst({
      where: { id }
    });
    
    ( duracur )
      ? res.json( duracur )
      : res.status( 404 ).json( { error: `Duracurso with id ${ id } not found` } );
  };
  public createduracur = async( req: Request, res: Response ) => {
    
    const [error, createduracurDto] = CreateduracurDto.create(req.body);
    if ( error ) return res.status(400).json({ error });

    const duracur = await prisma.duracion_curso.create({
      data: createduracurDto!
    });

    res.json( duracur );

  };


  public updateduracur = async (req: Request, res: Response) => {
    const id = +req.params.id;
    const [error, updateduracurDto] = UpdateduracurDto.create({ ...req.body, id });
    if (error) return res.status(400).json({ error });

    const duracur = await prisma.duracion_curso.findFirst({
      where: { id}
    });
    if (!duracur) return res.status(404).json({ error: `DuracionCurso with id${id} not found` });
    const updateduracur = await prisma.duracion_curso.update({
      where: { id},
      data: updateduracurDto!.values
    });
    res.json(updateduracur);
  };


  public deleteduracur = async (req: Request, res: Response) => {
    const id = +req.params.id;
    const duracur = await prisma.duracion_curso.findFirst({
      where: { id }
    });

    if (!duracur) return res.status(404).json({ error: `DuracionCurso with id${id} not found` });
    const deleted = await prisma.duracion_curso.delete({
      where: { id }
    });
    (deleted)
      ? res.json(deleted)
      : res.status(400).json({ error: `Movie with id ${id} not found` });
  };
}
