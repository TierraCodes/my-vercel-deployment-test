'use server'
import { PrismaClient } from "@prisma/client"
import { redirect } from "next/navigation"

export default async function updateVideo(data) {
    const prisma = new PrismaClient()

    await prisma.video.update({
        where: {
            id: Number(data.get('id')),
        },
        data: {
            name: String(data.get('name')),
            length: Number(data.get('runtime'))
        }
    })
    redirect('/videos')
}