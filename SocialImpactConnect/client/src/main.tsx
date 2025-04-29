import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

document.title = "HelpingHands - Social Welfare Organization";

createRoot(document.getElementById("root")!).render(<App />);
