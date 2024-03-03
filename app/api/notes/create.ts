// pages/api/createNote.ts
import { PrismaClient } from "@prisma/client"
import type { NextApiRequest, NextApiResponse } from "next"

const prisma = new PrismaClient()

// Definir un tipo para el cuerpo de la solicitud
type RequestBody = {
  text: string
  date: Date // o string dependiendo de cómo manejes las fechas en el cliente
  image?: string // Opcional en la solicitud
  themeId: number
  ownerId: number
}

// Definir un tipo para la respuesta exitosa
type SuccessResponse = {
  id: number
  text: string
  date: Date
  image: string | null
  themeId: number
  ownerId: number
}

// Definir un tipo para la respuesta de error
type ErrorResponse = {
  error: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<SuccessResponse | ErrorResponse>
) {
  const { text, date, image, themeId, ownerId } = req.body as RequestBody

  try {
    const newNote = await prisma.notes.create({
      data: {
        text,
        date: new Date(date), // Asegúrate de convertir la fecha correctamente
        image, // Este campo es opcional, se pasará como undefined si no se proporciona
        themeId,
        ownerId,
      },
    })

    // Asegúrate de que el objeto que devuelves coincide con el tipo `SuccessResponse`
    const response: SuccessResponse = {
      id: newNote.id,
      text: newNote.text,
      date: newNote.date,
      image: newNote.image, // Este campo puede ser `null` si no se proporcionó una imagen
      themeId: newNote.themeId,
      ownerId: newNote.ownerId,
    }

    res.status(200).json(response)
  } catch (error) {
    res.status(400).json({ error: "Something went wrong" })
  }
}
