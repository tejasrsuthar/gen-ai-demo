import prisma from "@/lib/db/prisma";
import { auth } from "@clerk/nextjs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "GenAI Demo - Notes",
};

export default async function NotesPage() {
  // server components, so only finished html will be returned

  const { userId } = auth();

  if (!userId) throw Error("userId undefined");

  const allNotes = await prisma.note.findMany({ where: { userId } });

  return <div>{JSON.stringify(allNotes)}</div>;
}
