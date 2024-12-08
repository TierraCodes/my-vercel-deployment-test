'use server'
import { PrismaClient } from "@prisma/client"

export default async function deleteVideo(data) {
    const Prisma = new PrismaClient();

    await Prisma.video.delete({
        where: {id: Number(data.get('videoID'))}
    })
}