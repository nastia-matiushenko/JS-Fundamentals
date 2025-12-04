import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import ImageUpload from "./ImageUpload.tsx";
import ScrollDemo from "./ScrollDemo.tsx";
import BrowserComp from "./BrowserComp.tsx";
import "core-js/es/promise";
import "core-js/es/array/find";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
    <ImageUpload />
    <ScrollDemo />
    <BrowserComp />
  </StrictMode>
);
