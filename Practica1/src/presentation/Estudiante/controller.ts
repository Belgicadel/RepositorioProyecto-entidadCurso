import { Request, Response } from 'express';
import { prisma } from '../../data/postgres';
import { CreateEstudianteDto, UpdateEstudianteDto } from '../../domain/dtos';


export class EstudianteController {
  //* DI
  constructor() { }
  public getEstudiante = async( req: Request, res: Response ) => {
    const estudiantes = await prisma.estudiante.findMany();
    return res.json( estudiantes );
  };
  public getEstudianteById = async( req: Request, res: Response ) => {
    const id = +req.params.id;
    if ( isNaN( id ) ) return res.status( 400 ).json( { error: 'id argument is not a number' } );

    const estudiante = await prisma.estudiante.findFirst({
      where: { id }
    });
    
    ( estudiante )
      ? res.json( )
      : res.status( 404 ).json( { error: `estudiante with id ${ id } not found` } );
  };
  public createEstudiante = async( req: Request, res: Response ) => {
    
    const [error, createEstudianteDto] = CreateEstudianteDto.create(req.body);
    if ( error ) return res.status(400).json({ error });

    const estudiantes = await prisma.estudiante.create({
      data: createEstudianteDto!
    });

    res.json( estudiantes );

  };


  public updateestudiante = async (req: Request, res: Response) => {
    const id = +req.params.id;
    const [error, updateEstudianteDto] = UpdateEstudianteDto.create({ ...req.body, id });
    if (error) return res.status(400).json({ error });

    const estudiantes = await prisma.estudiante.findFirst({
      where: { id }
    });
    if (!estudiantes) return res.status(404).json({ error: `estudiante with id ${id} not found` });
    const updateestudiante = await prisma.estudiante.update({
      where: { id },
      data: updateEstudianteDto!.values
    });
    res.json(updateestudiante);
  };


  public deleteestudiante = async (req: Request, res: Response) => {
    const id = +req.params.id;
    const estudiantes = await prisma.estudiante.findFirst({
      where: { id }
    });

    if (!estudiantes) return res.status(404).json({ error: `estudiante with id${id} not found` });
    const deleted = await prisma.estudiante.delete({
      where: { id }
    });
    (deleted)
      ? res.json(deleted)
      : res.status(400).json({ error: `estudiante with id ${id} not found` });
  };
}
