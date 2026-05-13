import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./styles.css";

import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { ContactSection } from "./components/ContactSection";
import { AiMotivationPrivacy } from "./pages/AiMotivationPrivacy";
import { TabataPrivacy } from "./pages/TabataPrivacy";

function HomePage() {
  return (
    <main className="bg-background text-foreground min-h-screen">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/privacy/ai-motivation-app"
          element={<AiMotivationPrivacy />}
        />
        <Route path="/privacy/tabata" element={<TabataPrivacy />} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);