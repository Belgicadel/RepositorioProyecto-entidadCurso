import { Request, Response } from 'express';
import { prisma } from '../../data/postgres';
import { CreateMatriculaDto, UpdateMatriculaDto } from '../../domain/dtos';


export class MatriculaController {
  //* DI
  constructor() { }
  public getMatricula = async( req: Request, res: Response ) => {
    const matriculas = await prisma.matricula.findMany();
    return res.json( matriculas );
  };
  public getMatriculaById = async( req: Request, res: Response ) => {
    const id = +req.params.id;
    if ( isNaN( id ) ) return res.status( 400 ).json( { error: 'id argument is not a number' } );

    const matricula = await prisma.matricula.findFirst({
      where: { id }
    });
    
    ( matricula )
      ? res.json( )
      : res.status( 404 ).json( { error: `Matricula with id ${ id } not found` } );
  };
  public createMatricula = async( req: Request, res: Response ) => {
    
    const [error, creatematriculaDto] = CreateMatriculaDto.create(req.body);
    if ( error ) return res.status(400).json({ error });

    const matriculas = await prisma.matricula.create({
      data: creatematriculaDto!
    });

    res.json( matriculas );

  };


  public updatematricula = async (req: Request, res: Response) => {
    const id = +req.params.id;
    const [error, updatematriculaDto] = UpdateMatriculaDto.create({ ...req.body, id });
    if (error) return res.status(400).json({ error });

    const matriculas = await prisma.matricula.findFirst({
      where: { id }
    });
    if (!matriculas) return res.status(404).json({ error: `Matriculas with id ${id} not found` });
    const updatematricula = await prisma.matricula.update({
      where: { id },
      data: updatematriculaDto!.values
    });
    res.json(updatematricula);
  };


  public deletematricula = async (req: Request, res: Response) => {
    const id = +req.params.id;
    const matriculas = await prisma.matricula.findFirst({
      where: { id }
    });

    if (!matriculas) return res.status(404).json({ error: `Matricula with id${id} not found` });
    const deleted = await prisma.matricula.delete({
      where: { id }
    });
    (deleted)
      ? res.json(deleted)
      : res.status(400).json({ error: `Matricula with id ${id} not found` });
  };
}
