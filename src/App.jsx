import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./components/theme-provider";
import Layout from "./components/layout/Index";
import Hero from "./pages/Hero";
import Contactpage from "./pages/Contactpage";
import PortfolioPage from "./pages/PortfolioPage";
function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Hero />} />
            {/* <Route path="/about" element={<About />} />
          <Route path="/uiux" element={<Uiux />} />
          <Route path="/portfolio" element={<Portfolio />} /> */}
            <Route path="/contact" element={<Contactpage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
