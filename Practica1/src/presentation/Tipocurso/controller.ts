import { Request, Response } from 'express';
import { prisma } from '../../data/postgres';
import { CreatetipocursoDto, UpdatetipocursoDto} from '../../domain/dtos';


export class TipocursoController {

  //* DI
  constructor() { }
  public getTipoCurso = async( req: Request, res: Response ) => {
    const tipocurso = await prisma.tipo_curso.findMany();
    return res.json( tipocurso );
  };



  public gettipocursoById = async( req: Request, res: Response ) => {
    const id = +req.params.id;
    //    localhost:3000
    if ( isNaN( id ) ) return res.status( 404 ).json( { error: 'id argument is not a number' } );

    const tipocurso = await prisma.tipo_curso.findFirst({
      where: { id }
    });
    
    ( tipocurso )
      ? res.json( tipocurso )
      : res.status( 404 ).json( { error: `TipoCurso with id ${ id } not found` } );
  };


  public createTipocur = async( req: Request, res: Response ) => {
    
    const [error, createtipocursoDto] = CreatetipocursoDto.create(req.body);
    if ( error ) return res.status(400).json({ error });

    const tipocurso = await prisma.tipo_curso.create({
      data: createtipocursoDto!
    });

    res.json( tipocurso );

  };



  public updatetipocurso = async( req: Request, res: Response ) => {
    const  id= +req.params.id;
    const [error, updatetipocursoDto] = UpdatetipocursoDto.create({...req.body, id});
    if ( error ) return res.status(400).json({ error });
    
    const tipocurso = await prisma.tipo_curso.findFirst({
      where: { id }
    });
    if ( !tipocurso ) return res.status( 404 ).json( { error: `TipoCurso with id ${ id} not found` } );
    const updatetipocurso = await prisma.tipo_curso.update({
      where: { id },
      data: updatetipocursoDto!.values
    });
    res.json( updatetipocurso);
  }


  public deletetipocur= async(req:Request, res: Response) => {
    const id = +req.params.id;
    const tipocurso = await prisma.tipo_curso.findFirst({
      where: { id }
    });

    if ( !tipocurso ) return res.status(404).json({ error: `TipoCurso with id${ id } not found` });
    const deleted = await prisma.tipo_curso.delete({
      where: { id }
    });
    ( deleted ) 
      ? res.json( deleted )
      : res.status(400).json({ error: `TipoCurso with id ${ id } not found` });
  }
}