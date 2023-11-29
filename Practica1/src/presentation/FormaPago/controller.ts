import { Request, Response } from 'express';
import { prisma } from '../../data/postgres';
import { CreateFormaPagoDto, UpdateFormaPagoDto } from '../../domain/dtos';


export class FormaPagoController {
  //* DI
  constructor() { }
  public getFormaPago = async( req: Request, res: Response ) => {
    const formapagos = await prisma.forma_Pago.findMany();
    return res.json( formapagos );
  };
  public getFormaPagoById = async( req: Request, res: Response ) => {
    const id = +req.params.id;
    if ( isNaN( id ) ) return res.status( 400 ).json( { error: 'id argument is not a number' } );

    const formapago = await prisma.forma_Pago.findFirst({
      where: { id }
    });
    
    ( formapago )
      ? res.json( )
      : res.status( 404 ).json( { error: `Forma Pago with id ${ id } not found` } );
  };
  public createFormaPago = async( req: Request, res: Response ) => {
    
    const [error, createFormaPagoDto] = CreateFormaPagoDto.create(req.body);
    if ( error ) return res.status(400).json({ error });

    const formapagos = await prisma.forma_Pago.create({
      data: createFormaPagoDto!
    });

    res.json( formapagos );

  };


  public updateFormaPago = async (req: Request, res: Response) => {
    const id = +req.params.id;
    const [error, updateFormaPagoDto] = UpdateFormaPagoDto.create({ ...req.body, id });
    if (error) return res.status(400).json({ error });

    const formapagos = await prisma.forma_Pago.findFirst({
      where: { id }
    });
    if (!formapagos) return res.status(404).json({ error: `Forma Pago with id ${id} not found` });
    const updateformapago = await prisma.forma_Pago.update({
      where: { id },
      data: updateFormaPagoDto!.values
    });
    res.json(updateformapago);
  };


  public deleteFormaPago = async (req: Request, res: Response) => {
    const id = +req.params.id;
    const formapagos = await prisma.forma_Pago.findFirst({
      where: { id }
    });

    if (!formapagos) return res.status(404).json({ error: `Forma Pago with id${id} not found` });
    const deleted = await prisma.forma_Pago.delete({
      where: { id }
    });
    (deleted)
      ? res.json(deleted)
      : res.status(400).json({ error: `Forma Pago with id ${id} not found` });
  };
}
