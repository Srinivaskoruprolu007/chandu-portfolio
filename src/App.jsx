import { useState } from "react";
import Contactpage from "./pages/Contactpage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Index";
import Hero from "./pages/Hero";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} >
          <Route index element={<Hero />} />
           {/* <Route path="/about" element={<About />} />
          <Route path="/uiux" element={<Uiux />} />
          <Route path="/portfolio" element={<Portfolio />} /> */}
          <Route path="/contact" element={<Contactpage />} />
          </Route>
         
        </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
