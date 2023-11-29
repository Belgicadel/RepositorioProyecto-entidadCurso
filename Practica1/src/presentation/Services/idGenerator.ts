// idGenerator.ts

import { prisma } from '../../data/postgres';

export async function obtenerNuevoIdInstrumento(): Promise<number> {
  // Puedes utilizar Prisma o cualquier otra lógica para obtener el próximo ID
  const ultimoInstrumento = await prisma.instrumento.findFirst({
    orderBy: { id: 'desc' },
  });

  // Si no hay instrumentos existentes, asigna el primer ID (por ejemplo, 1)
  const nuevoId = ultimoInstrumento ? ultimoInstrumento.id + 1 : 1;
  return nuevoId;
}

export async function obtenerNuevoIdProfesor(): Promise<number> {
    const ultimoProfesor = await prisma.profesor.findFirst({
      orderBy: { id: 'desc' },
    });
  
    const nuevoId = ultimoProfesor ? ultimoProfesor.id + 1 : 1;
    return nuevoId;
  }
export async function obtenerNuevoIdTipoCurso(): Promise<number> {
    const ultimoTipoCurso = await prisma.tipo_curso.findFirst({
      orderBy: { id: 'desc' },
    });
  
    const nuevoId = ultimoTipoCurso ? ultimoTipoCurso.id + 1 : 1;
    return nuevoId;
  }
  
  export async function obtenerNuevoIdDuracur(): Promise<number> {
    const ultimaDuracur = await prisma.duracion_curso.findFirst({
      orderBy: { id: 'desc' },
    });
  
    const nuevoId = ultimaDuracur ? ultimaDuracur.id + 1 : 1;
    return nuevoId;
  }
