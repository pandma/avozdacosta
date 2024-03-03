// pages/api/createUser.ts
import { PrismaClient } from "@prisma/client"
import type { NextApiRequest, NextApiResponse } from "next"

const prisma = new PrismaClient()

// Definir un tipo para el cuerpo del request
type RequestBody = {
  name: string
  lastName: string
  email: string
  password: string
  image: string
}

// Definir un tipo para la respuesta exitosa
type SuccessResponse = {
  id: number
  name: string
  lastName: string
  email: string
  image: string | null // Ajusta aquí para permitir null
}

// Definir un tipo para la respuesta de error
type ErrorResponse = {
  error: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<SuccessResponse | ErrorResponse>
) {
  const { name, lastName, email, password, image } = req.body as RequestBody

  try {
    const newUser = await prisma.user.create({
      data: {
        name,
        lastName,
        email,
        password,
        image,
      },
    })
    res.status(200).json(newUser)
  } catch (error) {
    res.status(400).json({ error: "Something went wrong" })
  }
}
