import Image from "next/image";
import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default function Home() {
  const { userId } = auth();

  if (userId) redirect("/notes");

  return (
    <main className="flex h-screen flex-col items-center justify-center gap-5">
      <div className="flex items-center gap-4">
        <Image src={logo} alt="GenAI Demo Logo" height={100} width={100} />
        <span className="text-4xl font-extrabold tracking-tight lg:text-5xl">
          GenAI Demo
        </span>
      </div>
      <p className="max-w-prose text-center">
        An intellegent note taking app demo demonstration using OpenAI,
        Pinecone, Next.JS, ShadCn, Clerk, Prisma and more.
      </p>
      <Button size="lg" asChild>
        <Link href="/notes">Open</Link>
      </Button>
    </main>
  );
}
