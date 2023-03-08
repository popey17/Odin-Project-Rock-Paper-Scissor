let myArr = ["rock", "paper", "scissor"];
let start = document.querySelector(".start");
let round = document.querySelector(".round");
let computer = document.querySelector(".computer");
let player = document.querySelector(".player");
let winner = document.querySelector(".winner");
let pWin = document.querySelector(".pwin");
let cWin = document.querySelector(".cwin");
let pWinCount = 0;
let cWinCount = 0;
let roundCount = 0;



function playRound() {
    let computerChoice = getComputerChoice();
    let playerChoice = getPlayerChoice();
    checkWinner(playerChoice, computerChoice);
    computer.textContent = "Computer : " + computerChoice;
    player.textContent = "Player : " + playerChoice;
    round.textContent = "Round: " + roundCount;
    pWin.textContent = "Player Score: " + pWinCount;
    cWin.textContent = "Computer Score: " + cWinCount;
}

let getComputerChoice = () => {
    return myArr[Math.floor(Math.random() * myArr.length)];
    //   console.log(myArr[Math.floor(Math.random() * myArr.length)]);
};

getPlayerChoice = () => {
    let input = document.querySelector(".input").value;
  input = input.toLowerCase();
  let validate = validateInput(input);

  if (input === "") {
    alert("Input rock, paper or scissor");
    location.reload();
  } else if (validate === false) {
    alert("Check Spelling");
    location.reload();
  } else {
    return input;
  }
};

function validateInput(choice) {
  return myArr.includes(choice);
}

checkWinner = (p, c) => {
  if (p === c) {
    roundCount++;
    winner.textContent = " This round is Tie.";
  } else if (
    (p === "rock" && c === "scissor") ||
    (p === "paper" && c === "rock") ||
    (p == "scissor" && c === "paper")
  ) {
    roundCount++;
    pWinCount++;
    winner.textContent = "Player Won this round.";
  } else {
    roundCount++;
    cWinCount++;
    winner.textContent = "Computer Won this round.";
  }
};

start.onclick = function () {
    // roundCount++;
  playRound();
  document.querySelector("#form").reset();
  if (roundCount >= 5){
    if( pWinCount === cWinCount){
        alert("Your Luck is not better than a PC");
    } else if ( pWinCount > cWinCount) {
        alert("Don't Proud On Winning a PC");
    } else {
        alert("Shame on You. Blah Blah")
    }
    location.reload();
}

};