import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export default async function Home() {
  const videos = await prisma.Video.findMany();
  const videosEl = videos.map((video) => <li>{video.name}</li>)
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {videosEl}
    </div>
  );
}