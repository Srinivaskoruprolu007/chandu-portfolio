import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./components/theme-provider";
import Layout from "./components/layout/Index";
import Hero from "./pages/Hero";
import Contactpage from "./pages/Contactpage";
import { IKContext } from "imagekitio-react";
import AboutPage from "./pages/AboutPage";
import PortfolioPage from "./pages/PortfolioPage";
import ImageDetailPage from "./pages/ImageDetailPage";

function App() {
  const testEndpoint = "https://ik.imagekit.io/6xgpee1zp";
  const testPublicKey = "public_xFUv8KNo4Ow0zhgqiS9EEHF5d1A=";
  return (
    <IKContext
      urlEndpoint={testEndpoint}
      publicKey={testPublicKey}
    >
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Hero />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<Contactpage />} />
              <Route path="/portfolio" element={<PortfolioPage />} />
              <Route path="/:category" element={<ImageDetailPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </IKContext>
  );
}

export default App;
