const containerEl = document.querySelector(".container");

const careers = [
  "Frontend Developer",
  "Freelancer",
  "Youtuber",
  "Social Media Manager",
  "Instructor",
];

let careerIndex = 0;

//create a variable to have index for the character of each element

let characterIndex = 0;

updateText();
//create a function that will loop through the careers array at each index

//Note: careers[careerIndex].slice(0, 1) === "I" ? "an" : "a". The "I" stands for Instructor in the array

function updateText() {
  characterIndex++;
  containerEl.innerHTML = `<h1>I am ${
    careers[careerIndex].slice(0, 1) === "I" ? "an" : "a"
  } ${careers[careerIndex].slice(0, characterIndex)}!</h1>`;

  if (characterIndex === careers[careerIndex].length) {
    careerIndex++;
    characterIndex = 0;
  }
  //inorder to reset after it finished looping
  if (careerIndex === careers.length) {
    careerIndex = 0;
  }
  setTimeout(updateText, 200);
}
// containerEl.innerHTML = `<h1>I am a ${careers[careerIndex]}!</h1>`; this can now be put in a function
