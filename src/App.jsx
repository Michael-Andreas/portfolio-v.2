import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Footer from "./components/Footer/Footer";
import Experience from "./components/Experience/Experience";

function App() {
  return (
    <>
      <section className="lg:min-h-[93dvh] flex flex-col relative">
        <Navbar />
        <Hero />
      </section>
      <About />
      <Skills />
      <Experience />
      <Footer />
    </>
  );
}

export default App;
