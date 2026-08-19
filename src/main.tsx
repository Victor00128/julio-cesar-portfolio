import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MotionConfig } from "framer-motion";
import "./index.css";
import App from "./App";

// reducedMotion="user" hace que Framer respete prefers-reduced-motion.
// El @media del CSS solo frenaba las animaciones CSS; las de Framer son JS
// y seguían moviéndose igual.
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MotionConfig reducedMotion="user">
      <App />
    </MotionConfig>
  </StrictMode>
);
