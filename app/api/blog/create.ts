import { PrismaClient } from "@prisma/client"
import type { NextApiRequest, NextApiResponse } from "next"

const prisma = new PrismaClient()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { title, subtitle, text, image, date, ownerId, themeId } = req.body

  try {
    const description = text.split(" ").slice(0, 50).join(" ")
    const slug = title.toLowerCase().replace(/ /g, "-")
    const newBlog = await prisma.blog.create({
      data: {
        title,
        subtitle,
        text,
        image,
        date: new Date(date),
        ownerId,
        themeId,
        description,
        slug,
      },
    })
    res.status(200).json(newBlog)
  } catch (error) {
    res.status(400).json({ error: "Something went wrong" })
  }
}
