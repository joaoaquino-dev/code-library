import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import Filter from "./components/Filter.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="flex flex-col h-screen bg-[#F4FBFF}">
      <Header />
      <div className="flex-1 max-w-300 w-full m-auto">
        <Filter
          title="Busque o conteúdo que deseja assistir hoje"
          placeholder="Buscar curso"
        />
      </div>
      <Footer />
    </div>
  </StrictMode>,
);
