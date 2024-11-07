import { AwaitedReactNode, JSXElementConstructor, ReactElement, ReactNode, ReactPortal, useState } from "react";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export default async function Home() {

  const videos = await prisma.Video.findMany();

  const videosUl = videos.map((video) => <li>{video.name}</li>);

  return (
    <div>
      <h1>List of Videos</h1>
      {videosUl}
    </div>
  );
}
