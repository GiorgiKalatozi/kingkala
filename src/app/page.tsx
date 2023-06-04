import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { getQuotes } from "@/services/api";
import { Quote } from "./types";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export default async function Home() {
  const quote: Quote = await getQuotes();

  return (
    <>
      <Header />
      <Hero quote={quote} />
      {/* <About />
      <Skills />
      <Experience />
      <Projects />
      <Footer /> */}
    </>
  );
}
