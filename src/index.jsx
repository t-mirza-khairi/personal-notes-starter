import React from "react";
import { createRoot } from "react-dom/client";
import NotesPage from "./pages/notesPage";

// import style
import "./styles/style.css";

const root = createRoot(document.getElementById("root"));
root.render(<NotesPage />);
