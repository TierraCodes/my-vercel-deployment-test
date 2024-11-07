import { useState } from "react";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export default async function Home() {

  const videos = await prisma.Video.findMany();

  const videosEl = videos.map((video) => <li>{video.name}</li>);

  return (
    <div>
      <ul>
        {videosEl}
      </ul>
    </div>
  );
}
