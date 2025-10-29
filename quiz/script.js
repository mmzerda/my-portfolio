console.log("JS file loaded");
const quiz = [
  {
    question: "Which planet is known as the Red Planet?",
    choices: ["Earth", "Mars", "Jupiter", "Saturn"],
    answer: "Mars"
  },
  {
    question: "What is 2 + 2?",
    choices: ["3", "4", "5", "22"],
    answer: "4"
  }
];

let current = 0;
let score = 0;

function showQuestion() {
  const q = quiz[current];
  document.getElementById("question").textContent = q.question;

  const box = document.getElementById("choices");
  box.innerHTML = "";

  q.choices.forEach(function (choice) {
    const btn = document.createElement("button");
    btn.textContent = choice;
    btn.onclick = () => checkAnswer(choice);
    box.appendChild(btn);
  });
}

window.onload = showQuestion;

function checkAnswer(selected) {
  const correct = quiz[current].answer;
  const buttons = document.querySelectorAll("#choices button");
  buttons.forEach(btn => {
    if (btn.textContent === correct) {
      btn.style.background = "#2ecc71";  //green for right
    } else if (btn.textContent === selected && selected!== correct) {
      btn.style.background = "#e74c3c";  //red for wrong
    } else {
      btn.style.background = "#bbb";  //grey the rest
    }
  });
  if (selected === correct) {
    score++;
    document.getElementById("score").textContent =
"Score: " + score;
  }
}
function nextQ() {
  // reset all choice buttons to original color
  document.querySelectorAll("#choices button").forEach(btn => {
    btn.style.background = "#667eea";
  });


  current++;             
  if (current >= quiz.length) {
    alert("Quiz finished! Your score: " + score + "/" + quiz.length);
    // optional: reset if you want
    current = 0;
    score = 0;
    document.getElementById("score").textContent = "score: 0";
}
showQuestion();             
}