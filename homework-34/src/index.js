import "./styles/main.css";
import image from "./images/gory_sneg_relef_226184_1920x1080.jpg";

const img = document.createElement("img");
img.src = image;
document.body.appendChild(img);

const heading = document.createElement("h1");
heading.textContent = "Привіт з Webpack!";
document.body.appendChild(heading);
