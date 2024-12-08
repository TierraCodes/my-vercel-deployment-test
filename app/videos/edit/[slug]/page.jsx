import { PrismaClient } from "@prisma/client";
import updateVideo from '../updateVideos'
import Update from './update'

export default async function editVideos({props}) {
    const prisma = new PrismaClient()
    
    const video = await prisma.video.findUnique({
        where: { id: Number(props.slug) }
    })

    return (
        <div>
            <h2>Update Video: </h2>
            <Update updateUrl={updateVideo} video={video}/>
        </div>
    );
}