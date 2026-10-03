import { createFileRoute } from "@tanstack/react-router";
import { Hero, Navbar } from "@/components/portfolio/Hero";
import { About, Achievements, Contact, Experience, Footer, GithubSection, Learning, Projects, Skills } from "@/components/portfolio/Sections";

const title = "Kiran H K — AI & Full-Stack Developer";
const description =
  "Portfolio of Kiran H K, a Computer Science & Business Systems student building AI-powered and full-stack applications. Open to 2027 internships.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <About />
        <GithubSection />
        <Experience />
        <Achievements />
        <Learning />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
