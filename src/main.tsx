import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Header from "./components/Header.tsx";
import Filter from "./components/Filter.tsx";
import Card from "./components/Card.tsx";
import Footer from "./components/Footer.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="flex flex-col h-screen bg-[#F4FBFF}">
      <Header />
      <main className="flex-1 max-w-300 w-full m-auto">
        <Filter
          title="Busque o conteúdo que deseja assistir hoje"
          placeholder="Buscar curso"
        />
        <div className="bg-white rounded-md py-2 mt-4">
          <p className="font-bold text-[#00A2F7] text-center">
            Nossos cursos mais buscados
          </p>
          <div className="grid grid-cols-5 gap-4 mt-3">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  </StrictMode>,
);
