import About from "./components/about/About";
import Hero from "./components/hero/Hero";
import Navigation from "./components/navigation/Navigation";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";

function App() {
  return (
    <>
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
    </>
  );
}

export default App;
