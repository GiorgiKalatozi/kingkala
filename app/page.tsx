import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main>
      <Button className="flex items-center justify-center m-auto">
        Build Yourself
      </Button>

      <Button
        variant={"destructive"}
        className="flex items-center justify-center m-auto"
      >
        Suffer or suffer
      </Button>

      <Button
        variant={"outline"}
        className="flex items-center justify-center m-auto"
      >
        there is no tommorrow
      </Button>
    </main>
  );
}
