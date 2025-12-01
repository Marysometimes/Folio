import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { Case1 } from "./pages/Case1";
import { Case2 } from "./pages/Case2";
import { Case3 } from "./pages/Case3";
import { Case4 } from "./pages/Case4";
import { About } from "./pages/About";

// Vite sætter BASE_URL til "/" lokalt og "/Folio/" på GitHub Pages.
// Vi fjerner evt. trailing slash, så React Router er helt glad.
const rawBase = import.meta.env.BASE_URL || "/";
const basename = rawBase.replace(/\/+$/, "");

export default function App() {
  return (
    <Router basename={basename}>
      <div className="flex flex-col min-h-screen">
        <Navigation />
        <main className="flex-1">
          <Routes>
            {/* Home på root */}
            <Route path="/" element={<Home />} />

            {/* Dine cases */}
            <Route path="/case-1" element={<Case1 />} />
            <Route path="/case-2" element={<Case2 />} />
            <Route path="/case-3" element={<Case3 />} />
            <Route path="/case-4" element={<Case4 />} />

            {/* About-side */}
            <Route path="/about" element={<About />} />

            {/* Fallback: hvis noget ikke matcher, vis Home */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
