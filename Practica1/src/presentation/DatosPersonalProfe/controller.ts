import { Request, Response } from 'express';
import { prisma } from '../../data/postgres';
import { CreateDatosPersonalesProfeDto, UpdateDatosPersonalesProfeDto } from '../../domain/dtos';


export class DatosPersonalesProfeController {
  //* DI
  constructor() { }
  public getDatosPersonalesProfe = async( req: Request, res: Response ) => {
    const datosPersonalesProfesores = await prisma.datos_personal_prof.findMany();
    return res.json( datosPersonalesProfesores );
  };
  public getDatosPersonalesProfeById = async( req: Request, res: Response ) => {
    const id = +req.params.id;
    if ( isNaN( id ) ) return res.status( 400 ).json( { error: 'id argument is not a number' } );

    const datosPersonalesProfe = await prisma.datos_personal_prof.findFirst({
      where: { id }
    });
    
    ( datosPersonalesProfe )
      ? res.json( )
      : res.status( 404 ).json( { error: `datosPersonalesProfe with id ${ id } not found` } );
  };
  public createDatosPersonalesProfe = async( req: Request, res: Response ) => {
    
    const [error, createDatosPersonalesProfeDto] = CreateDatosPersonalesProfeDto.create(req.body);
    if ( error ) return res.status(400).json({ error });

    const datosPersonalesProfesores = await prisma.datos_personal_prof.create({
      data: createDatosPersonalesProfeDto!
    });

    res.json( datosPersonalesProfesores );

  };


  public updateDatosPersonalesProfe = async (req: Request, res: Response) => {
    const id = +req.params.id;
    const [error, updateDatosPersonalesProfeDto] = UpdateDatosPersonalesProfeDto.create({ ...req.body, id });
    if (error) return res.status(400).json({ error });

    const datosPersonalesProfesores = await prisma.datos_personal_prof.findFirst({
      where: { id }
    });
    if (!datosPersonalesProfesores) return res.status(404).json({ error: `datosPersonalesProfe with id ${id} not found` });
    const updateprofesor = await prisma.datos_personal_prof.update({
      where: { id },
      data: updateDatosPersonalesProfeDto!.values
    });
    res.json(updateprofesor);
  };


  public deleteDatosPersonalesProfe = async (req: Request, res: Response) => {
    const id = +req.params.id;
    const datosPersonalesProfesores = await prisma.datos_personal_prof.findFirst({
      where: { id }
    });

    if (!datosPersonalesProfesores) return res.status(404).json({ error: `datosPersonalesProfe with id${id} not found` });
    const deleted = await prisma.datos_personal_prof.delete({
      where: { id }
    });
    (deleted)
      ? res.json(deleted)
      : res.status(400).json({ error: `datosPersonalesProfe with id ${id} not found` });
  };
}
