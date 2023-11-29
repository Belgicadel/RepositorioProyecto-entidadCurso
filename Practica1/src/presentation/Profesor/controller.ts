import { Request, Response } from 'express';
import { prisma } from '../../data/postgres';
import { CreateProfesorDto, UpdateProfesorDto } from '../../domain/dtos';


export class ProfesorController {
  //* DI
  constructor() { }
  public getProfesor = async( req: Request, res: Response ) => {
    const profesores = await prisma.profesor.findMany();
    return res.json( profesores );
  };
  public getProfesorById = async( req: Request, res: Response ) => {
    const id = +req.params.id;
    if ( isNaN( id ) ) return res.status( 400 ).json( { error: 'id argument is not a number' } );

    const profesor = await prisma.profesor.findFirst({
      where: { id }
    });
    
    ( profesor )
      ? res.json( )
      : res.status( 404 ).json( { error: `profesor with id ${ id } not found` } );
  };
  public createProfesor = async( req: Request, res: Response ) => {
    
    const [error, createProfesorDto] = CreateProfesorDto.create(req.body);
    if ( error ) return res.status(400).json({ error });

    const profesores = await prisma.profesor.create({
      data: createProfesorDto!
    });

    res.json( profesores );

  };


  public updateprofesor = async (req: Request, res: Response) => {
    const id = +req.params.id;
    const [error, updateProfesorDto] = UpdateProfesorDto.create({ ...req.body, id });
    if (error) return res.status(400).json({ error });

    const profesores = await prisma.profesor.findFirst({
      where: { id }
    });
    if (!profesores) return res.status(404).json({ error: `profesor with id ${id} not found` });
    const updateprofesor = await prisma.profesor.update({
      where: { id },
      data: updateProfesorDto!.values
    });
    res.json(updateprofesor);
  };


  public deleteprofesor = async (req: Request, res: Response) => {
    const id = +req.params.id;
    const profesores = await prisma.profesor.findFirst({
      where: { id }
    });

    if (!profesores) return res.status(404).json({ error: `profesor with id${id} not found` });
    const deleted = await prisma.profesor.delete({
      where: { id }
    });
    (deleted)
      ? res.json(deleted)
      : res.status(400).json({ error: `profesor with id ${id} not found` });
  };
}
