import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import ImageUpload from "./ImageUpload.tsx";
// default export from src/components/ImageUpload.tsx

// or, if it's a named export
// import { ImageUpload } from './components/ImageUpload'
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
    <ImageUpload />
  </StrictMode>
);
