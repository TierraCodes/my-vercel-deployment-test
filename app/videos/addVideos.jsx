'use server'
import { PrismaClient } from "@prisma/client"
import { redirect } from "next/navigation"

export default async function addVideo(data) {
    const prisma = new PrismaClient()
    await prisma.video.create({
        data: {
            name: Sring(data.get('videoname')),
            url: 'test',
            votes: 0,
            length: Number(data.get('runtime'))
        }
    })
    redirect('/videos')
}