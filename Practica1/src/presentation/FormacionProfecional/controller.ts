import { Request, Response } from 'express';
import { prisma } from '../../data/postgres';
import { CreateFormacionProfecionalProfeDto, UpdateFormacionProfecionalProfeDto } from '../../domain/dtos';


export class FormacionProfecionalController {
  //* DI
  constructor() { }
  public getFormacionProfecional = async( req: Request, res: Response ) => {
    const formacionProfecionales = await prisma.formacion_profecional.findMany();
    return res.json( formacionProfecionales );
  };
  public getFormacionProfecionalById = async( req: Request, res: Response ) => {
    const id = +req.params.id;
    if ( isNaN( id ) ) return res.status( 400 ).json( { error: 'id argument is not a number' } );

    const formacionProfecional = await prisma.formacion_profecional.findFirst({
      where: { id }
    });
    
    ( formacionProfecional )
      ? res.json( )
      : res.status( 404 ).json( { error: `formacionProfecional with id ${ id } not found` } );
  };
  public createFormacionProfecional = async( req: Request, res: Response ) => {
    
    const [error, createFormacionProfecionalProfeDto] = CreateFormacionProfecionalProfeDto.create(req.body);
    if ( error ) return res.status(400).json({ error });

    const formacionProfecionales = await prisma.formacion_profecional.create({
      data: createFormacionProfecionalProfeDto!
    });

    res.json( formacionProfecionales );

  };


  public updateFormacionProfecional = async (req: Request, res: Response) => {
    const id = +req.params.id;
    const [error, updateFormacionProfecionalProfeDto] = UpdateFormacionProfecionalProfeDto.create({ ...req.body, id });
    if (error) return res.status(400).json({ error });

    const formacionProfecionales = await prisma.formacion_profecional.findFirst({
      where: { id }
    });
    if (!formacionProfecionales) return res.status(404).json({ error: `formacionProfecional with id ${id} not found` });
    const updateformacionProfecional = await prisma.formacion_profecional.update({
      where: { id },
      data: updateFormacionProfecionalProfeDto!.values
    });
    res.json(updateformacionProfecional);
  };


  public deleteFormacionProfecional = async (req: Request, res: Response) => {
    const id = +req.params.id;
    const formacionProfecionales = await prisma.formacion_profecional.findFirst({
      where: { id }
    });

    if (!formacionProfecionales) return res.status(404).json({ error: `formacionProfecional with id${id} not found` });
    const deleted = await prisma.formacion_profecional.delete({
      where: { id }
    });
    (deleted)
      ? res.json(deleted)
      : res.status(400).json({ error: `formacionProfecional with id ${id} not found` });
  };
}
