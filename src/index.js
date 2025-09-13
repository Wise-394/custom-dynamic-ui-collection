import "./style.css";
import { handleScreenWidthChange } from "./modules/hamburger";


const mediaQuery = window.matchMedia("(max-width: 700px)");
mediaQuery.addEventListener("change", handleScreenWidthChange);
