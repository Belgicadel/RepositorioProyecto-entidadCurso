import { Request, Response } from 'express';
import { prisma } from '../../data/postgres';
import { CreatePeriodoAcademicoDto, UpdatePeriodoAcademicoDto } from '../../domain/dtos';


export class PeriodoAcademicoController {
  //* DI
  constructor() { }
  public getPeriodoAcademico = async( req: Request, res: Response ) => {
    const periodoacademicos = await prisma.periodo_Academico.findMany();
    return res.json( periodoacademicos );
  };
  public getPeriodoAcademicoById = async( req: Request, res: Response ) => {
    const id = +req.params.id;
    if ( isNaN( id ) ) return res.status( 400 ).json( { error: 'id argument is not a number' } );

    const periodoacademico = await prisma.periodo_Academico.findFirst({
      where: { id }
    });
    
    ( periodoacademico )
      ? res.json( )
      : res.status( 404 ).json( { error: `Periodo Academicos with id ${ id } not found` } );
  };
  public createPeriodoAcademico = async( req: Request, res: Response ) => {
    
    const [error, createPeriodoAcademicoDto] = CreatePeriodoAcademicoDto.create(req.body);
    if ( error ) return res.status(400).json({ error });

    const periodoacademicos = await prisma.periodo_Academico.create({
      data: createPeriodoAcademicoDto!
    });

    res.json( periodoacademicos );

  };


  public updatePeriodoAcademico = async (req: Request, res: Response) => {
    const id = +req.params.id;
    const [error, updatePeriodoAcademicoDto] = UpdatePeriodoAcademicoDto.create({ ...req.body, id });
    if (error) return res.status(400).json({ error });

    const periodoacademicos = await prisma.periodo_Academico.findFirst({
      where: { id }
    });
    if (!periodoacademicos) return res.status(404).json({ error: `Periodo Academico with id ${id} not found` });
    const updateperiodoacademico = await prisma.periodo_Academico.update({
      where: { id },
      data: updatePeriodoAcademicoDto!.values
    });
    res.json(updateperiodoacademico);
  };


  public deletePeriodoAcademico = async (req: Request, res: Response) => {
    const id = +req.params.id;
    const periodoacademicos = await prisma.periodo_Academico.findFirst({
      where: { id }
    });

    if (!periodoacademicos) return res.status(404).json({ error: `Periodo Academico with id${id} not found` });
    const deleted = await prisma.periodo_Academico.delete({
      where: { id }
    });
    (deleted)
      ? res.json(deleted)
      : res.status(400).json({ error: `Periodo Academico with id ${id} not found` });
  };
}
