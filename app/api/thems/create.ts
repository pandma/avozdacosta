import { PrismaClient } from "@prisma/client"
import type { NextApiRequest, NextApiResponse } from "next"

const prisma = new PrismaClient()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { name } = req.body

  try {
    const newTheme = await prisma.thems.create({
      data: {
        name,
      },
    })
    res.status(200).json(newTheme)
  } catch (error) {
    res.status(400).json({ error: "Something went wrong" })
  }
}
