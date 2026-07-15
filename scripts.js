const startScreen = document.getElementById("start-screen");
const startButton = document.getElementById("start-btn");
const nextScreen = document.getElementById("study-screen");
const flipNext = document.getElementById("flip-btn");
const firstFlip = document.getElementById("flip-start");
const flipInner = document.querySelector(".flip-card-inner");
const frontText = document.getElementById("front-text");
const backText = document.getElementById("back-text");
const endScreen = document.getElementById("end-screen");
const restartButton = document.getElementById("restart-btn");
const totalDeck = document.getElementById("total-deck");
const currentDeck = document.getElementById("current-deck");


//event listeners
startButton.addEventListener("click", startFlip);
flipNext.addEventListener("click", flipNextPage);
restartButton.addEventListener("click", restartDeck);




function startFlip() {
  startScreen.classList.remove("active");
  nextScreen.classList.add("active");

  showCard();
}


function flipNextPage() {
if(flipInner.classList.contains("flipped")) {
  currentCardIndex ++;
  if(currentCardIndex < cardDeck.length){
    showCard();
  } else{
   nextScreen.classList.remove("active");
   endScreen.classList.add("active");
  }
  
} else {
   flipInner.classList.add("flipped");
}
}

const cardDeck = [{
  front: "1. what is flexbox used for?",
  back: "is a CSS layout tool that makes it easy to design flexible, responsive web layouts."},

  {front: "2.What does HTML stand for? ",
  back: "2. HyperText Markup Language. It forms the structural blueprint of a web page."},

  {front: "3. what is the difference between <div> and <span>",
  back: "3. <div> is a block-level element(starts on a new line). <span> is an inline element(stays on the same line)."},
  {front: "4. What is the purpose of the alt attribute on an <img> tag?",
    back: "4. It provides alternative text description for screen readers and displays if the image fails to load."
}];

totalDeck.textContent = cardDeck.length;


//FLIP CARD VARIABLES
let currentCardIndex = 0;


function showCard() {
  currentDeck.textContent = currentCardIndex + 1;
  const currentFlip = cardDeck[currentCardIndex];

  frontText.textContent = currentFlip.front;
  backText.textContent = currentFlip.back;

  flipInner.classList.remove("flipped");
}

function restartDeck() {
  currentCardIndex = 0;

  endScreen.classList.remove("active");
  startScreen.classList.add("active");

  showCard();
}



