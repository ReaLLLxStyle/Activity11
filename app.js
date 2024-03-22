import { leftDiv } from "./info.js";
import { rightDiv } from "./image.js";

const myObject = {
    title: "Doberman",
    para: "The Doberman Pinscher (Doberman) is a powerful and muscular member of the Working Group developed for police and military work and to be a protector and companion in the home. The breed originated in Germany and quickly gained popularity in other countries for its courage, intelligence, and loyalty.",
    button: "Click Here",
    image: "dober.jpg"
}

const {title, para, button, image} = myObject

let container = document.getElementById("container")
container.append(leftDiv(title, para, button))
container.append(rightDiv(image))