import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // 1. Import the Router
import App from "./App.tsx";
import "./index.css";

// 2. Wrap <App /> with BrowserRouter and the correct basename
createRoot(document.getElementById("root")!).render(
  <BrowserRouter basename="/AdesanyaPortfolio">
    <App />
  </BrowserRouter>
);