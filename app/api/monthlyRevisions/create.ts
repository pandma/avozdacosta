import { PrismaClient } from "@prisma/client"
import type { NextApiRequest, NextApiResponse } from "next"

const prisma = new PrismaClient()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { title, text, image, date, ownerId } = req.body

  try {
    const slug = title.toLowerCase().replace(/ /g, "-")
    const newMonthlyRevision = await prisma.monthlyRevisions.create({
      data: {
        title,
        text,
        image,
        date: new Date(date),
        slug,
        ownerId,
      },
    })
    res.status(200).json(newMonthlyRevision)
  } catch (error) {
    res.status(400).json({ error: "Something went wrong" })
  }
}
