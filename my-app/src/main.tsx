import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App.tsx";
import ImageUpload from "./components/ImageUpload.tsx";
import ScrollDemo from "./components/ScrollDemo.tsx";
import BrowserComp from "./components/BrowserComp.tsx";
import "core-js/es/promise";
import "core-js/es/array/find";
import Validation from "./components/Validation.tsx";
import CssAnimationDemo from "./components/CssAnimationDemo.tsx";
import EmbeddedViewDemo from "./components/EmbeddedViewDemo.tsx";
import ButtonDemo from "./components/ButtonDemo.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
    <ImageUpload />
    <ScrollDemo />
    <BrowserComp />
    <Validation />
    <CssAnimationDemo />
    <EmbeddedViewDemo />
    <ButtonDemo />
  </StrictMode>
);

