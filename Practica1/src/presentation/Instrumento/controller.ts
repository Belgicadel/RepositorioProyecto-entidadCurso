import { Request, Response } from 'express';
import { prisma } from '../../data/postgres';
import { CreateinstrumentoDto, UpdateinstrumentoDto } from '../../domain/dtos';


export class InstrumentoController {
  //* DI
  constructor() { }
  public getInstrumento = async( req: Request, res: Response ) => {
    const instrumentos = await prisma.instrumento.findMany();
    return res.json( instrumentos );
  };
  public getInstrumentoById = async( req: Request, res: Response ) => {
    const id = +req.params.id;
    if ( isNaN( id ) ) return res.status( 400 ).json( { error: 'id argument is not a number' } );

    const instrumento = await prisma.instrumento.findFirst({
      where: { id }
    });
    
    ( instrumento )
      ? res.json(instrumento )
      : res.status( 404 ).json( { error: `Instrumento with id ${ id } not found` } );
  };
  public createInstrumento = async( req: Request, res: Response ) => {
    
    const [error, createinstrumentoDto] = CreateinstrumentoDto.create(req.body);
    if ( error ) return res.status(400).json({ error });

    const instrumentos = await prisma.instrumento.create({
      data: createinstrumentoDto!
    });

    res.json( instrumentos );

  };


  public updateinstrumento = async (req: Request, res: Response) => {
    const id = +req.params.id;
    const [error, updateinstrumentoDto] = UpdateinstrumentoDto.create({ ...req.body, id });
    if (error) return res.status(400).json({ error });

    const instrumentos = await prisma.instrumento.findFirst({
      where: { id }
    });
    if (!instrumentos) return res.status(404).json({ error: `Instrumento with id ${id} not found` });
    const updateinstrumento = await prisma.instrumento.update({
      where: { id },
      data: updateinstrumentoDto!.values
    });
    res.json(updateinstrumento);
  };


  public deleteinstrumento = async (req: Request, res: Response) => {
    const id = +req.params.id;
    const instrumentos = await prisma.instrumento.findFirst({
      where: { id }
    });

    if (!instrumentos) return res.status(404).json({ error: `Instrumento with id${id} not found` });
    const deleted = await prisma.instrumento.delete({
      where: { id }
    });
    (deleted)
      ? res.json(deleted)
      : res.status(400).json({ error: `Instrumento with id ${id} not found` });
  };
}
