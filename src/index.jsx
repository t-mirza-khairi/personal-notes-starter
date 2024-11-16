import React from "react";
import { createRoot } from "react-dom/client";
import NotesApp from "./pages/notesApp";

// import style
import "./styles/style.css";

const root = createRoot(document.getElementById("root"));
root.render(<NotesApp />);
