import { Request, Response } from 'express';
import { prisma } from '../../data/postgres';
import { CreatecategoriaDto, UpdatecategoriaDto } from '../../domain/dtos';


export class CategoriaController {
  //* DI
  constructor() { }
  public getCategoria = async( req: Request, res: Response ) => {
    const categorias = await prisma.categoria.findMany();
    return res.json( categorias );
  };
  public getCategoriaById = async( req: Request, res: Response ) => {
    const id = +req.params.id;
    if ( isNaN( id ) ) return res.status( 400 ).json( { error: 'id argument is not a number' } );

    const categoria = await prisma.categoria.findFirst({
      where: { id }
    });
    
    ( categoria )
      ? res.json( )
      : res.status( 404 ).json( { error: `Categoria with id ${ id } not found` } );
  };
  public createCategoria = async( req: Request, res: Response ) => {
    
    const [error, createcategoriaDto] = CreatecategoriaDto.create(req.body);
    if ( error ) return res.status(400).json({ error });

    const categorias = await prisma.categoria.create({
      data: createcategoriaDto!
    });

    res.json( categorias );

  };


  public updatecategoria = async (req: Request, res: Response) => {
    const id = +req.params.id;
    const [error, updatecategoriaDto] = UpdatecategoriaDto.create({ ...req.body, id });
    if (error) return res.status(400).json({ error });

    const categorias = await prisma.categoria.findFirst({
      where: { id }
    });
    if (!categorias) return res.status(404).json({ error: `Categoria with id ${id} not found` });
    const updatecategoria = await prisma.categoria.update({
      where: { id },
      data: updatecategoriaDto!.values
    });
    res.json(updatecategoria);
  };


  public deletecategoria = async (req: Request, res: Response) => {
    const id = +req.params.id;
    const categorias = await prisma.categoria.findFirst({
      where: { id }
    });

    if (!categorias) return res.status(404).json({ error: `Categoria with id${id} not found` });
    const deleted = await prisma.categoria.delete({
      where: { id }
    });
    (deleted)
      ? res.json(deleted)
      : res.status(400).json({ error: `Categoria with id ${id} not found` });
  };
}
