import { Request, Response } from 'express';
import { CreateduracurDto, UpdateduracurDto } from '../../domain/dtos';
import { CreateDuracurso, DeleteDuracurso, GetDuracurso, GetDuracursos, DuracursoRepository, UpdateDuracurso } from '../../domain';


export class DuracursoController {

  //* DI
  constructor(
    private readonly DuracursoRepository: DuracursoRepository,
  ) { }


  public getDuracurso = ( req: Request, res: Response ) => {

    new GetDuracursos( this.DuracursoRepository )
      .execute()
      .then( duracurso => res.json( duracurso ) )
      .catch( error => res.status( 400 ).json( { error } ) );

  };

  public getDuracursoById = ( req: Request, res: Response ) => {
    const id = +req.params.id;

    new GetDuracurso( this.DuracursoRepository )
      .execute( id )
      .then( duracurso => res.json( duracurso ) )
      .catch( error => res.status( 400 ).json( { error } ) );

  };

  public createduracurso = ( req: Request, res: Response ) => {
    const [ error, createduracurDto ] = CreateduracurDto.create( req.body );
    if ( error ) return res.status( 400 ).json( { error } );

    new CreateDuracurso( this.DuracursoRepository )
      .execute( createduracurDto! )
      .then( duracurso => res.json( duracurso ) )
      .catch( error => res.status( 400 ).json( { error } ) );


  };

  public updateDuracurso = ( req: Request, res: Response ) => {
    const id = +req.params.id;
    const [ error, updateduracurDto ] = UpdateduracurDto.create( { ...req.body, id } );
    if ( error ) return res.status( 400 ).json( { error } );

    new UpdateDuracurso( this.DuracursoRepository )
      .execute( updateduracurDto! )
      .then( duracurso => res.json( duracurso ) )
      .catch( error => res.status( 400 ).json( { error } ) );

  };


  public deleteDuracurso = ( req: Request, res: Response ) => {
    const id = +req.params.id;

    new DeleteDuracurso( this.DuracursoRepository )
      .execute( id )
      .then( duracurso => res.json( duracurso ) )
      .catch( error => res.status( 400 ).json( { error } ) );

  };



} 