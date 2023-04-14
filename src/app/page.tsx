import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";
import { getQuotes } from "@/app/services/api";
import { Quote } from "./types";

export default async function Home() {
  const quote: Quote = await getQuotes();

  return (
    <main>
      <Hero quote={quote} />
    </main>
  );
}
