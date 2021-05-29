let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board")
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("rock")
const paper_div = document.getElementById("paper")
const scissors_div = document.getElementById("scissors")

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

// setTimeout(function(){
//   console.log('Hello!')
// }, 3000);

function win(userChoice, computerChoice) {
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  result_p.innerHTML = `${userChoice.charAt(0).toUpperCase() + userChoice.slice(1)}${smallUserWord} beats ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}${smallCompWord}... You win!`
  document.getElementById(userChoice).classList.add('green-glow');
  setTimeout(() => {
    document.getElementById(userChoice).classList.remove('green-glow');
  }, 500);
}

function lose(userChoice, computerChoice) {
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  result_p.innerHTML = `${userChoice.charAt(0).toUpperCase() + userChoice.slice(1)}${smallUserWord} loses to ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}${smallCompWord}... You lost!`
  document.getElementById(userChoice).classList.add('red-glow');
  setTimeout(() => {
    document.getElementById(userChoice).classList.remove('red-glow');
  }, 500);
}

function draw(userChoice, computerChoice) {
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  result_p.innerHTML = `${userChoice.charAt(0).toUpperCase() + userChoice.slice(1)}${smallUserWord} equals ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}${smallCompWord}... It's a draw!`
  document.getElementById(userChoice).classList.add('grey-glow');
  setTimeout(() => {
    document.getElementById(userChoice).classList.remove('grey-glow');
  }, 500);
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch(userChoice + computerChoice){
    case "rockscissors":
    case "paperrock":
    case "scissorspaper":
      win(userChoice, computerChoice);
      break;
    case "rockpaper":
    case "paperscissors":
    case "scissorsrock":
      lose(userChoice, computerChoice);
      break;
    case "rockrock":
    case "paperpaper":
    case "scissorsscissors":
      draw(userChoice, computerChoice);
      break;
  }
}

function main() {
  rock_div.addEventListener('click', function () {
    game("rock");
  })

  paper_div.addEventListener('click', function () {
    game("paper");
  })

  scissors_div.addEventListener('click', function () {
    game("scissors");
  })
}

main();