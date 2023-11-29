import { Request, Response } from 'express';
import { prisma } from '../../data/postgres';
import { CreateUbicacionEstudDto, UpdateUbicacionEstudDto } from '../../domain/dtos';


export class UbicacionController {
  //* DI
  constructor() { }
  public getUbicacion = async( req: Request, res: Response ) => {
    const ubicacion = await prisma.ubicacion.findMany();
    return res.json( ubicacion );
  };
  public getUbicacionById = async( req: Request, res: Response ) => {
    const id = +req.params.id;
    if ( isNaN( id ) ) return res.status( 400 ).json( { error: 'id argument is not a number' } );

    const ubicacion = await prisma.ubicacion.findFirst({
      where: { id }
    });
    
    ( ubicacion )
      ? res.json( )
      : res.status( 404 ).json( { error: `ubicacion with id ${ id } not found` } );
  };
  public createUbicacion = async( req: Request, res: Response ) => {
    
    const [error, createUbicacionEstudDto] = CreateUbicacionEstudDto.create(req.body);
    if ( error ) return res.status(400).json({ error });

    const ubicaciones = await prisma.ubicacion.create({
      data: createUbicacionEstudDto!
    });

    res.json( ubicaciones );

  };


  public updateUbicacion = async (req: Request, res: Response) => {
    const id = +req.params.id;
    const [error, updateUbicacionEstudDto] = UpdateUbicacionEstudDto.create({ ...req.body, id });
    if (error) return res.status(400).json({ error });

    const ubicaciones = await prisma.ubicacion.findFirst({
      where: { id }
    });
    if (!ubicaciones) return res.status(404).json({ error: `ubicacion with id ${id} not found` });
    const updateubicacion = await prisma.ubicacion.update({
      where: { id },
      data: updateUbicacionEstudDto!.values
    });
    res.json(updateubicacion);
  };


  public deleteUbicacion = async (req: Request, res: Response) => {
    const id = +req.params.id;
    const ubicaciones = await prisma.ubicacion.findFirst({
      where: { id }
    });

    if (!ubicaciones) return res.status(404).json({ error: `ubicacion with id${id} not found` });
    const deleted = await prisma.ubicacion.delete({
      where: { id }
    });
    (deleted)
      ? res.json(deleted)
      : res.status(400).json({ error: `ubicacion with id ${id} not found` });
  };
}
