import { useState } from "react";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Hero from "./components/layout/Hero";
import About from "./components/layout/About";
import Uiux from "./components/layout/Uiux";
import Portfolio from "./components/layout/Portfolio";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Uiux />
      <Portfolio /> 
      <Footer />
    </>
  );
}

export default App;
