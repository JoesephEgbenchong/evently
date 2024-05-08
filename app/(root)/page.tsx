import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <h1 className="text-4xl">Evently</h1>
      <Button variant="destructive" className="px-4 py-2 rounded-full ml-5">Hello World</Button>
    </main>
  );
}
