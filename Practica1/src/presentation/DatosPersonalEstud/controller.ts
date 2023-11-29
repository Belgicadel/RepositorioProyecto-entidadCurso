import { Request, Response } from 'express';
import { prisma } from '../../data/postgres';
import { CreateDatosPersonalesEstudDto, UpdateDatosPersonalesEstudDto } from '../../domain/dtos';


export class DatosPersonalesEstudController {
  //* DI
  constructor() { }
  public getDatosPersonalesEstud = async( req: Request, res: Response ) => {
    const datosPersonalesEstudiantes = await prisma.datos_personales_es.findMany();
    return res.json( datosPersonalesEstudiantes );
  };
  public getDatosPersonalesEstudById = async( req: Request, res: Response ) => {
    const id = +req.params.id;
    if ( isNaN( id ) ) return res.status( 400 ).json( { error: 'id argument is not a number' } );

    const datosPersonalesEstud = await prisma.datos_personales_es.findFirst({
      where: { id }
    });
    
    ( datosPersonalesEstud )
      ? res.json( )
      : res.status( 404 ).json( { error: `datosPersonalesEstud with id ${ id } not found` } );
  };
  public createDatosPersonalesEstud = async( req: Request, res: Response ) => {
    
    const [error, createDatosPersonalesEstudDto] = CreateDatosPersonalesEstudDto.create(req.body);
    if ( error ) return res.status(400).json({ error });

    const datosPersonalesEstudiantes = await prisma.datos_personales_es.create({
      data: createDatosPersonalesEstudDto!
    });

    res.json( datosPersonalesEstudiantes );

  };


  public updateDatosPersonalesEstud = async (req: Request, res: Response) => {
    const id = +req.params.id;
    const [error, updateDatosPersonalesEstudDto] = UpdateDatosPersonalesEstudDto.create({ ...req.body, id });
    if (error) return res.status(400).json({ error });

    const datosPersonalesEstudiantes = await prisma.datos_personales_es.findFirst({
      where: { id }
    });
    if (!datosPersonalesEstudiantes) return res.status(404).json({ error: `datosPersonalesEstud with id ${id} not found` });
    const updateestudiante = await prisma.datos_personales_es.update({
      where: { id },
      data: updateDatosPersonalesEstudDto!.values
    });
    res.json(updateestudiante);
  };


  public deleteDatosPersonalesEstud = async (req: Request, res: Response) => {
    const id = +req.params.id;
    const datosPersonalesEstudiantes = await prisma.datos_personales_es.findFirst({
      where: { id }
    });

    if (!datosPersonalesEstudiantes) return res.status(404).json({ error: `datosPersonalesEstud with id${id} not found` });
    const deleted = await prisma.datos_personales_es.delete({
      where: { id }
    });
    (deleted)
      ? res.json(deleted)
      : res.status(400).json({ error: `datosPersonalesEstud with id ${id} not found` });
  };
}
