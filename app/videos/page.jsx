
import DeleteVideo from './delete/page'
import AddVideo from './add/page'
import { PrismaClient } from "@prisma/client";


export default async function Videos() {
  const prisma = new PrismaClient()
  let videos = await prisma.video.findMany();

  const videoList = videos.map((videoItem) => 
    <li key={videoItem.id}>
      <a href={'.videos/video/'+videoItem.id}>{videoItem.name}</a>
      <a href={'/videos/edit/'+videoItem.id}>[edit]</a>
      {<DeleteVideo
        videoID = {videoItem.id}
      />}
    </li>
  )

  return (
    <>
      <h1>List of Videos</h1>
      <div>{videoList}</div>
      <Add></Add>
    </>
  );
}