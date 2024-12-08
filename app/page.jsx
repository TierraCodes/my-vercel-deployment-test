
import { PrismaClient } from "@prisma/client";
import Videos from "./videos/page";

export default async function Home() {
  const prisma = new PrismaClient()
  const videos = await prisma.video.findMany();

  return (
    <>
      <h1>List of Videos</h1>
      <Videos videoList = {videos}/>
    </>
  );
}
