//global variables
const choices = ['Bear', 'Hunter', 'Ninja'];
var wins = 0;
var losses = 0;

//random number function
function botRandomSelect() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

//function to assemble results
function clickChoice(playerChoice) {
  const botChoice = botRandomSelect();
  const result = compareChoices(playerChoice, botChoice);
  //assemble game results
  document.getElementById('results').innerText = `You chose ${playerChoice}.\nThe computer chose ${botChoice}\n${result}`;
  //assemble win loss counter status
  document.getElementById('win-loss-counter').innerText = `Your Wins: ${wins}\nComputer Wins: ${losses}`;
  // turn on the display for the results summary
  document.getElementById("results").style.display = "block";
  // turn on the display for the win loss counter
  document.getElementById("win-loss-counter").style.display = "block";
  // turn on the display for the play again button
  document.getElementById("playAgain").style.display = "block";
  // turn on the hr lines around the play again button
  var lines = document.querySelectorAll(".hide");
  lines.forEach(function(lines) {
    lines.style.display = "block";
  });
  // turn off the play option buttons to prevent user from clicking again without saying they want to play again
  var button = document.getElementById("Bear");
  button.disabled = true;
  var button = document.getElementById("Hunter");
  button.disabled = true;
  var button = document.getElementById("Ninja");
  button.disabled = true;
}

//function to compare choices aka game logic and win loss counter increments
function compareChoices(playerChoice, botChoice) {
  //ties
  if (playerChoice === botChoice) {
    return "You tied.";
    //wins
  } else if (
    (playerChoice === 'Bear' && botChoice === 'Hunter') ||
    (playerChoice === 'Hunter' && botChoice === 'Ninja') ||
    (playerChoice === 'Ninja' && botChoice === 'Bear')
  ) {
    //counter up wins
    wins++;
    return "You win!";
    //losses
  } else {
    //counter up losses
    losses++;
    return "The computer wins!";
  }
}

//function to play again and reset buttons
function playAgain() {
  //hide the results win counter and play aagain button
  document.getElementById("results").style.display = "none";
  document.getElementById("win-loss-counter").style.display = "none";
  document.getElementById("playAgain").style.display = "none";
  //enables the player choice buttons
  var button = document.getElementById("Bear");
  button.disabled = false;
  var button = document.getElementById("Hunter");
  button.disabled = false;
  var button = document.getElementById("Ninja");
  button.disabled = false;
  //hids the hr lines around the play again button
  var lines = document.querySelectorAll(".hide");
  lines.forEach(function(lines) {
    lines.style.display = "none";
  });
}