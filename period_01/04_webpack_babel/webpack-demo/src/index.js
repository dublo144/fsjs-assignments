import _ from "lodash";
import "./style.css";
import Logo from "./logo.png";
import printMe from "./print";

function component() {
  const element = document.createElement("div");

  // Lodash, currently included via a script, is required for this line to work
  // Lodash, now imported by this script
  element.innerHTML = _.join(["Hello", "webpack"], " ");
  element.classList.add("hello");

  // Image
  const myIcon = new Image();
  myIcon.src = Logo;

  element.appendChild(myIcon);

  // Button
  const btn = document.createElement("button");
  btn.innerHTML = "Click me";
  btn.onclick = printMe;

  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());
