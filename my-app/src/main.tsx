import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import ImageUpload from "./ImageUpload.tsx";
import ScrollDemo from "./ScrollDemo.tsx";
import BrowserComp from "./BrowserComp.tsx";
import "core-js/es/promise";
import "core-js/es/array/find";
import Validation from "./Validation.tsx";
import CssAnimationDemo from "./CssAnimationDemo.tsx";
import EmbeddedViewDemo from "./EmbeddedViewDemo.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
    <ImageUpload />
    <ScrollDemo />
    <BrowserComp />
    <Validation />
    <CssAnimationDemo />
    <EmbeddedViewDemo />
  </StrictMode>
);
