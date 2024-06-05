import About from "./components/about/About";
import Hero from "./components/hero/Hero";
import Navigation from "./components/navigation/Navigation";
import AboutCopy from "./components/about/AboutCopy";
import Skills from "./components/skills/Skills";

function App() {
  return (
    <>
      <Navigation />
      <Hero />
      <About />
      <Skills />
      {/* <AboutCopy /> */}
    </>
  );
}

export default App;
