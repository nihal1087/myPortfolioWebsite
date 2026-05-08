import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import avatarImage from "../assets/img/avatar.webp";
import "./styles.css";

const avatarPreload = document.createElement("link");
avatarPreload.rel = "preload";
avatarPreload.as = "image";
avatarPreload.href = avatarImage;
avatarPreload.fetchPriority = "high";
document.head.append(avatarPreload);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
