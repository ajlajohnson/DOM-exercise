"use strict";

let links = document.querySelector(".link"); //declared variable for UL
let menuButton = document.querySelector(".menu"); //menu button that shows letters and numbers on background
let container = document.querySelector(".container"); //div class for ABC paragraph
let numbersLink = document.querySelector(".numbers-link"); //literally the numbers link to show the numbers
let lettersLink = document.querySelector(".letters-link"); //litterally the letters link to show the letters

let lettersParagraph = document.querySelector(".letters"); //declaring para of alphabet in a variable
let numberParagraph = document.createElement("p"); //created element "P" for numbers paragraph
container.append(numberParagraph); //added the paragraph to the ABC div class
numberParagraph.innerText = "0 1 2 3 4 5 6 7 8 9"; //added innertext of numbers 0-9
numberParagraph.classList.add("hide"); //added classlist for number paragraph
menuButton.addEventListener("click", () => {//menu add listener for "click"
  links.classList.toggle("show");
});
links.addEventListener("click", (event) => { //
  if (event.target.classList.contains("letters-link")) { //if the event of a classlist that contains "letters-link" is clicked
    lettersParagraph.classList.add("show"); //the letters paragraph with the class list of "show" is added
    lettersParagraph.classList.remove("hide"); //while the the letters paragraph with the class list of "HIDE" is removed
    numberParagraph.classList.add("hide"); //while the the numbers paragraph with the class list of "HIDE" is ADDED
    numberParagraph.classList.remove("show"); ////and the the numbers paragraph with the class list of "show" is removed
  } else if (event.target.classList.contains("numbers-link")) { //if the event of a classlist that contains "letters-link" is clicked
    numberParagraph.classList.add("show");//the numberparagraph with the class list "show" is added 
    numberParagraph.classList.remove("hide"); //the numberparagraph with the class list "hide" is removed 
    lettersParagraph.classList.add("hide");//the letters paragraph with the class list "hide" is added
    lettersParagraphy.classList.remove("show");//the letter paragraph with the class list "hide" is removed 
  }
});