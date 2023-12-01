import { Request, Response } from 'express';
import { CreatetipocursoDto, UpdatetipocursoDto } from '../../domain/dtos';
import { CreateTipocurso, DeleteTipocurso, GetTipocurso, GetTipocursos, TipocursoRepository, UpdateTipocurso } from '../../domain';


export class TipocursoController {

  //* DI
  constructor(
    private readonly TipocursoRepository: TipocursoRepository,
  ) { }


  public getTipocurso = ( req: Request, res: Response ) => {

    new GetTipocursos( this.TipocursoRepository )
      .execute()
      .then( tipocurso => res.json( tipocurso ) )
      .catch( error => res.status( 400 ).json( { error } ) );

  };

  public getTipocursoById = ( req: Request, res: Response ) => {
    const id = +req.params.id;

    new GetTipocurso( this.TipocursoRepository )
      .execute( id )
      .then( tipocurso => res.json( tipocurso ) )
      .catch( error => res.status( 400 ).json( { error } ) );

  };

  public createTipocurso = ( req: Request, res: Response ) => {
    const [ error, createtipocursoDto ] = CreatetipocursoDto.create( req.body );
    if ( error ) return res.status( 400 ).json( { error } );

    new CreateTipocurso( this.TipocursoRepository )
      .execute( createtipocursoDto! )
      .then( tipocurso => res.json( tipocurso ) )
      .catch( error => res.status( 400 ).json( { error } ) );


  };

  public updateTipocurso = ( req: Request, res: Response ) => {
    const id = +req.params.id;
    const [ error, updatetipocursoDto ] = UpdatetipocursoDto.create( { ...req.body, id } );
    if ( error ) return res.status( 400 ).json( { error } );

    new UpdateTipocurso( this.TipocursoRepository )
      .execute( updatetipocursoDto! )
      .then( tipocurso => res.json( tipocurso ) )
      .catch( error => res.status( 400 ).json( { error } ) );

  };


  public deleteTipocurso = ( req: Request, res: Response ) => {
    const id = +req.params.id;

    new DeleteTipocurso( this.TipocursoRepository )
      .execute( id )
      .then( tipocurso => res.json( tipocurso ) )
      .catch( error => res.status( 400 ).json( { error } ) );

  };



} 