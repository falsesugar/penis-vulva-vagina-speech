import "./styles.css";
import {} from "./draggable.js";

let draggables = document.querySelectorAll(".draggable");
let description = document.getElementById("description");
let start = document.getElementById("start-game");
let speechButton = document.getElementById("speech-button");

const SpeechRecognition = webkitSpeechRecognition;

draggables.forEach((element) => {
  let bounds = element.getBoundingClientRect();
  element.style.left =
    bounds.width / 2 +
    Math.random() * (window.innerWidth - bounds.width) +
    "px";
  element.style.top =
    bounds.height / 2 +
    Math.random() * (window.innerHeight - bounds.height) +
    "px";
});

//small vags

function spawnVag1small() {
  document.getElementById("app").innerHTML += `
  <image crossorigin="anonymous"
   class="draggable"
   src="./img/vag1-alpha.png"
   style="left:${Math.random() * window.innerWidth}px;
          top:${Math.random() * window.innerHeight}px;
          width:100px;
          height:100px;
          z-index: 10;" />
          `;
}

function spawnVag2small() {
  document.getElementById("app").innerHTML += `
  <image crossorigin="anonymous"
   class="draggable"
   src="./img/vag2-alpha.png"
   style="left:${Math.random() * window.innerWidth}px;
          top:${Math.random() * window.innerHeight}px;
          width:100px;
          height:100px;
          z-index: 10;" />
          `;
}

function spawnVag3small() {
  document.getElementById("app").innerHTML += `
  <image crossorigin="anonymous"
   class="draggable"
   src="./img/vag3-alpha.png"
   style="left:${Math.random() * window.innerWidth}px;
          top:${Math.random() * window.innerHeight}px;
          width:100px;
          height:100px;
          z-index: 10;" />
          `;
}

function spawnVag4small() {
  document.getElementById("app").innerHTML += `
  <image crossorigin="anonymous"
   class="draggable"
   src="./img/vag4-alpha.png"
   style="left:${Math.random() * window.innerWidth}px;
          top:${Math.random() * window.innerHeight}px;
          width:100px;
          height:100px;
          z-index: 10;" />
          `;
}

function spawnVag5small() {
  document.getElementById("app").innerHTML += `
  <image crossorigin="anonymous"
   class="draggable"
   src="./img/vag5-alpha.png"
   style="left:${Math.random() * window.innerWidth}px;
          top:${Math.random() * window.innerHeight}px;
          width:100px;
          height:100px;
          z-index: 10;" />
          `;
}

function spawnVag6small() {
  document.getElementById("app").innerHTML += `
  <image crossorigin="anonymous"
   class="draggable"
   src="./img/vag6-alpha.png"
   style="left:${Math.random() * window.innerWidth}px;
          top:${Math.random() * window.innerHeight}px;
          width:100px;
          height:100px;
          z-index: 10;" />
          `;
}

function spawnVag7small() {
  document.getElementById("app").innerHTML += `
  <image crossorigin="anonymous"
   class="draggable"
   src="./img/vag7-alpha.png"
   style="left:${Math.random() * window.innerWidth}px;
          top:${Math.random() * window.innerHeight}px;
          width:100px;
          height:100px;
          z-index: 10;" />
          `;
}

function spawnVag8small() {
  document.getElementById("app").innerHTML += `
  <image crossorigin="anonymous"
   class="draggable"
   src="./img/vag8-alpha.png"
   style="left:${Math.random() * window.innerWidth}px;
          top:${Math.random() * window.innerHeight}px;
          width:100px;
          height:100px;
          z-index: 10;" />
          `;
}

//med vags

function spawnVag1med() {
  document.getElementById("app").innerHTML += `
  <image crossorigin="anonymous"
   class="draggable"
   src="./img/vag1-alpha.png"
   style="left:${Math.random() * window.innerWidth}px;
          top:${Math.random() * window.innerHeight}px;
          width:170px;
          height:170px;
          z-index: 10;" />
          `;
}

function spawnVag2med() {
  document.getElementById("app").innerHTML += `
  <image crossorigin="anonymous"
   class="draggable"
   src="./img/vag2-alpha.png"
   style="left:${Math.random() * window.innerWidth}px;
          top:${Math.random() * window.innerHeight}px;
          width:170px;
          height:170px;
          z-index: 10;" />
          `;
}

function spawnVag3med() {
  document.getElementById("app").innerHTML += `
  <image crossorigin="anonymous"
   class="draggable"
   src="./img/vag3-alpha.png"
   style="left:${Math.random() * window.innerWidth}px;
          top:${Math.random() * window.innerHeight}px;
          width:170px;
          height:170px;
          z-index: 10;" />
          `;
}

function spawnVag4med() {
  document.getElementById("app").innerHTML += `
  <image crossorigin="anonymous"
   class="draggable"
   src="./img/vag4-alpha.png"
   style="left:${Math.random() * window.innerWidth}px;
          top:${Math.random() * window.innerHeight}px;
          width:170px;
          height:170px;
          z-index: 10;" />
          `;
}

function spawnVag5med() {
  document.getElementById("app").innerHTML += `
  <image crossorigin="anonymous"
   class="draggable"
   src="./img/vag5-alpha.png"
   style="left:${Math.random() * window.innerWidth}px;
          top:${Math.random() * window.innerHeight}px;
          width:170px;
          height:170px;
          z-index: 10;" />
          `;
}

function spawnVag6med() {
  document.getElementById("app").innerHTML += `
  <image crossorigin="anonymous"
   class="draggable"
   src="./img/vag6-alpha.png"
   style="left:${Math.random() * window.innerWidth}px;
          top:${Math.random() * window.innerHeight}px;
          width:170px;
          height:170px
          z-index: 10;
          z-index: 10;" />
          `;
}

function spawnVag7med() {
  document.getElementById("app").innerHTML += `
  <image crossorigin="anonymous"
   class="draggable"
   src="./img/vag7-alpha.png"
   style="left:${Math.random() * window.innerWidth}px;
          top:${Math.random() * window.innerHeight}px;
          width:170px;
          height:170px;
          z-index: 10;" />
          `;
}

function spawnVag8med() {
  document.getElementById("app").innerHTML += `
  <image crossorigin="anonymous"
   class="draggable"
   src="./img/vag8-alpha.png"
   style="left:${Math.random() * window.innerWidth}px;
          top:${Math.random() * window.innerHeight}px;
          width:170px;
          height:170px;
          z-index: 10;" />
          `;
}

//big vags

function spawnVag1big() {
  document.getElementById("app").innerHTML += `
  <image crossorigin="anonymous"
   class="draggable"
   src="./img/vag1-alpha.png"
   style="left:${Math.random() * window.innerWidth}px;
          top:${Math.random() * window.innerHeight}px;
          width:230px;
          height:230px;
          z-index: 10;" />
          `;
}

function spawnVag2big() {
  document.getElementById("app").innerHTML += `
  <image crossorigin="anonymous"
   class="draggable"
   src="./img/vag2-alpha.png"
   style="left:${Math.random() * window.innerWidth}px;
          top:${Math.random() * window.innerHeight}px;
          width:230px;
          height:230px;
          z-index: 10;" />
          `;
}

function spawnVag3big() {
  document.getElementById("app").innerHTML += `
  <image crossorigin="anonymous"
   class="draggable"
   src="./img/vag3-alpha.png"
   style="left:${Math.random() * window.innerWidth}px;
          top:${Math.random() * window.innerHeight}px;
          width:230px;
          height:230px;
          z-index: 10;" />
          `;
}

function spawnVag4big() {
  document.getElementById("app").innerHTML += `
  <image crossorigin="anonymous"
   class="draggable"
   src="./img/vag4-alpha.png"
   style="left:${Math.random() * window.innerWidth}px;
          top:${Math.random() * window.innerHeight}px;
          width:230px;
          height:230px;
          z-index: 10;" />
          `;
}

function spawnVag5big() {
  document.getElementById("app").innerHTML += `
  <image crossorigin="anonymous"
   class="draggable"
   src="./img/vag5-alpha.png"
   style="left:${Math.random() * window.innerWidth}px;
          top:${Math.random() * window.innerHeight}px;
          width:230px;
          height:230px;
          z-index: 10;" />
          `;
}

function spawnVag6big() {
  document.getElementById("app").innerHTML += `
  <image crossorigin="anonymous"
   class="draggable"
   src="./img/vag6-alpha.png"
   style="left:${Math.random() * window.innerWidth}px;
          top:${Math.random() * window.innerHeight}px;
          width:230px;
          height:230px;
          z-index: 10;" />
          `;
}

function spawnVag7big() {
  document.getElementById("app").innerHTML += `
  <image crossorigin="anonymous"
   class="draggable"
   src="./img/vag7-alpha.png"
   style="left:${Math.random() * window.innerWidth}px;
          top:${Math.random() * window.innerHeight}px;
          width:230px;
          height:230px;
          z-index: 10;" />
          `;
}

function spawnVag8big() {
  document.getElementById("app").innerHTML += `
  <image crossorigin="anonymous"
   class="draggable"
   src="./img/vag8-alpha.png"
   style="left:${Math.random() * window.innerWidth}px;
          top:${Math.random() * window.innerHeight}px;
          width:230px;
          height:230px;
          z-index: 10;" />
          `;
}

//function arrays

let arraySmallVag = [];
arraySmallVag.push(spawnVag1small);
arraySmallVag.push(spawnVag2small);
arraySmallVag.push(spawnVag3small);
arraySmallVag.push(spawnVag4small);
arraySmallVag.push(spawnVag5small);
arraySmallVag.push(spawnVag6small);
arraySmallVag.push(spawnVag7small);
arraySmallVag.push(spawnVag8small);

let arrayMedVag = [];
arrayMedVag.push(spawnVag1med);
arrayMedVag.push(spawnVag2med);
arrayMedVag.push(spawnVag3med);
arrayMedVag.push(spawnVag4med);
arrayMedVag.push(spawnVag5med);
arrayMedVag.push(spawnVag6med);
arrayMedVag.push(spawnVag7med);
arrayMedVag.push(spawnVag8med);

let arrayBigVag = [];
arrayBigVag.push(spawnVag1big);
arrayBigVag.push(spawnVag2big);
arrayBigVag.push(spawnVag3big);
arrayBigVag.push(spawnVag4big);
arrayBigVag.push(spawnVag5big);
arrayBigVag.push(spawnVag6big);
arrayBigVag.push(spawnVag7big);
arrayBigVag.push(spawnVag8big);

//speech

const getSpeech = () => {
  const recognition = new SpeechRecognition();
  recognition.lang = "en-US";
  recognition.start();
  recognition.continuous = true;
  recognition.interimResults = true;

  recognition.onresult = (event) => {
    const speechResult = event.results[0][0].transcript;
    console.log("result: " + speechResult);
    console.log("confidence: " + event.results[0][0].confidence);

    if (speechResult === "penis") {
      console.log("penis has been said");
      arraySmallVag[Math.floor(Math.random() * 9)]();
    } else if (speechResult === "vulva") {
      arrayMedVag[Math.floor(Math.random() * 9)]();
      console.log("vulva has been said");
    } else if (speechResult === "vagina") {
      arrayBigVag[Math.floor(Math.random() * 9)]();
      console.log("vagina has been said");
    }
  };

  recognition.onend = () => {
    console.log("it is over");

    recognition.stop();
    getSpeech(); // uncomment for "endless mode"
  };

  recognition.onerror = (event) => {
    console.log("something went wrong: " + event.error);
  };
};

speechButton.addEventListener("click", () => {
  console.log("clickedd");
  getSpeech();
  description.style.visibility = "hidden";
  start.style.visibility = "hidden";
  speechButton.style.visibility = "hidden";
});
