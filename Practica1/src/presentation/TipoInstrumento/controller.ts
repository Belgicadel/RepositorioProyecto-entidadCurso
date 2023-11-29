import { Request, Response } from 'express';
import { prisma } from '../../data/postgres';
import { CreatetipoinstrumentoDto, UpdatetipoinstrumentoDto } from '../../domain/dtos';


export class TipoInstrumentoController {
  //* DI
  constructor() { }
  public getTipoInstrumento = async( req: Request, res: Response ) => {
    const TiposInstrumentos = await prisma.tipo_instrumento.findMany();
    return res.json( TiposInstrumentos );
  };
  public getTipoInstrumentoById = async( req: Request, res: Response ) => {
    const id = +req.params.id;
    if ( isNaN( id ) ) return res.status( 400 ).json( { error: 'id argument is not a number' } );

    const tipo_instrumento = await prisma.tipo_instrumento.findFirst({
      where: { id }
    });
    
    ( tipo_instrumento )
      ? res.json(tipo_instrumento )
      : res.status( 404 ).json( { error: `Tipo de Instrumento with id ${ id } not found` } );
  };
  public createTipoInstrumento = async( req: Request, res: Response ) => {
    
    const [error, createtipoinstrumentoDto] = CreatetipoinstrumentoDto.create(req.body);
    if ( error ) return res.status(400).json({ error });

    const TiposInstrumentos = await prisma.tipo_instrumento.create({
      data: createtipoinstrumentoDto!
    });

    res.json( TiposInstrumentos );

  };


  public updatetipoinstrumento = async (req: Request, res: Response) => {
    const id = +req.params.id;
    const [error, updatetipoinstrumentoDto] = UpdatetipoinstrumentoDto.create({ ...req.body, id });
    if (error) return res.status(400).json({ error });

    const TiposInstrumentos = await prisma.tipo_instrumento.findFirst({
      where: { id }
    });
    if (!TiposInstrumentos) return res.status(404).json({ error: `Tipo de Instrumento with id ${id} not found` });
    const updatetipoinstrumento = await prisma.tipo_instrumento.update({
      where: { id },
      data: updatetipoinstrumentoDto!.values
    });
    res.json(updatetipoinstrumento);
  };


  public deletetipoinstrumento = async (req: Request, res: Response) => {
    const id = +req.params.id;
    const TiposInstrumentos = await prisma.tipo_instrumento.findFirst({
      where: { id }
    });

    if (!TiposInstrumentos) return res.status(404).json({ error: `Tipo de Instrumento with id${id} not found` });
    const deleted = await prisma.tipo_instrumento.delete({
      where: { id }
    });
    (deleted)
      ? res.json(deleted)
      : res.status(400).json({ error: `Tipo de Instrumento with id ${id} not found` });
  };
}
