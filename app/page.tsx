import { useState } from "react";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export default async function Home() {

  const videos = await prisma.video.findMany();

  const videosUl = videos.map((Video : {name : string}) => <li>{Video.name}</li>);

  return (
    <main>
      <h1>List of Videos</h1>
      {videosUl}
    </main>
  );
}
