import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="flex flex-col h-screen bg-[#F4FBFF}">
      <Header />
      <div className="flex-1 max-w-300 w-full m-auto">
        <p>João Aquino</p>
      </div>
      <Footer />
    </div>
  </StrictMode>,
);
