import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./components/theme-provider";
import Layout from "./components/layout/Index";
import Hero from "./pages/Hero";
import Contactpage from "./pages/Contactpage";
import { imageKit } from "./lib/utils";
import { IKContext } from "imagekitio-react";
import AboutPage from "./pages/AboutPage";
import PortfolioPage from "./pages/PortfolioPage";
function App() {
  return (
    <IKContext
      urlEndpoint={imageKit.endpoint}
      publicKey={imageKit.publicKey}
    >
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Hero />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<Contactpage />} />
              <Route path="/portfolio" element={<PortfolioPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </IKContext>
  );
}

export default App;
