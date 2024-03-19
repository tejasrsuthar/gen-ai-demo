import Note from "@/components/Note";
import prisma, { Prisma } from "@/lib/db/prisma";
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

  console.log("DEBUG_AllNotes", allNotes);

  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {allNotes.map((note) => (
        <Note note={note} key={note.id} />
      ))}
      {allNotes.length === 0 && (
        <div className="col-span-full text-center">
          {"You don't have any notes. Why don't you create one?"}
        </div>
      )}
    </div>
  );
}
