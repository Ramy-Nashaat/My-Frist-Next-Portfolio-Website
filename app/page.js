
//  Importing all the major sections/components of the page
import Home from "./components/home/Home";
import About from "./components/about/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/ContactForm";

export const metadata = {
  title: "Portfolio Website",
  description: "A personal portfolio built with Next.js",
};

//  Main functional component for the page
export default function Page() {
  
 
  return (
    //  Main container with flex layout and custom background
    <main className="flex min-h-screen flex-col bg-[#000e21] container mx-auto px-12 py-4">
      
      {/*  Hero section (introduction, hero image, animated title, etc.) */}
      <Home />

      {/*  About section (bio, image, skills, education, etc.) */}
      <About />

      {/*  Projects section (frontend project list with filters) */}
      <Projects />

      {/*  Contact section (form + social icons) */}
      <Contact />
    </main>
  );
}
