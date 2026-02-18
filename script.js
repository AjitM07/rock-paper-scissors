let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
let user_score = document.querySelector("#userscore");
let comp_score = document.querySelector("#compscore");
let comp_decision = document.querySelector("#comp_decision");
let msg = document.querySelector(".msg");

const genCompChoice = () => {
  let choices = ["rock", "paper", "scissors"];
  let idx = Math.floor(Math.random() * 3);
  return choices[idx];
};

const drawGame = () => {
  msg.innerText = `Its a Draw!!`;
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    msg.innerText = `You Win !!  ${userChoice.toUpperCase()} beats ${compChoice.toUpperCase()}`;
  } else {
    msg.innerText = `Comp Wins !!  ${compChoice.toUpperCase()} beats ${userChoice.toUpperCase()}`;
  }
};

const updateScore = (userWin) => {
  if (userWin) {
    userScore++;
    user_score.innerText = userScore;
  } else {
    compScore++;
    comp_score.innerText = compScore;
  }
};

const playGame = (userChoice) => {
  const compChoice = genCompChoice();
  console.log("userchoice is : ", userChoice);
  console.log("compChoice is : ", compChoice);

  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissors" ? false : true;
    } else if (userChoice === "scissors") {
      userWin = compChoice === "rock" ? false : true;
    }

    showWinner(userWin, userChoice, compChoice);
    updateScore(userWin);
  }
  comp_decision.innerText = `Computer chooses ${compChoice.toUpperCase()}`;
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
