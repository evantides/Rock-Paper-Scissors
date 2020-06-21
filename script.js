const options = ["Lapis", "Papyrus", "Scalpellus"];

const player = {
  choice: null,
  score: 0
};

const computer = {
  choice: null,
  score: 0
};

function introText(){
  const titleText = document.createElement('h1');
  titleText.innerText = "Lapis, Papyrus, Scalpellus";
  document.querySelector('body').appendChild(titleText);
  const subTitle = document.createElement('h2');
  subTitle.innerText = "Welcome to the Game!";
  document.querySelector('body').appendChild(subTitle);
  const button = document.createElement('button');
  button.innerText = "Click to Play!";
  document.querySelector('body').appendChild(button);
  
  document.querySelector('button').onclick = function(){
    document.querySelector('h1').remove();
    document.querySelector('h2').remove();
    document.querySelector('button').remove();
    gameLoop();
  } 
}

introText();

function compChooses () {
  return(options[Math.floor(Math.random() * 3)]);
}



function gameLoop(){
  
  const instructions = document.createElement("h2");
  instructions.innerText = "Select An Option!";
  document.querySelector('body').appendChild(instructions);
  
  const rock = document.createElement('button');
  rock.innerText = "Lapis";
  document.querySelector('body').appendChild(rock);
  
  const paper = document.createElement('button');
  paper.innerText = "Papyrus";
  document.querySelector('body').appendChild(paper);
  
  const scissors = document.createElement('button');
  scissors.innerText = "Scalpellus";
  document.querySelector('body').appendChild(scissors);
  
  computer.choice = compChooses();
  console.log("The Computer Chose: " + computer.choice);
  
  rock.onclick = function() {
    player.choice = options[0];
    compareChoices(player.choice, computer.choice);
  } 
  paper.onclick = function() {
    player.choice = options[1];
    compareChoices(player.choice, computer.choice);
  } 
  scissors.onclick = function() {
    player.choice = options[2];
    compareChoices(player.choice, computer.choice);
  } 
}

function compareChoices(player, computer){
  if (player === computer) {
    tie();
  } else if (player === options[0]) {
    if (computer === options[1]){
      compWins();
    } else {
      playWins();
    }
  } else if (player === options[1]) {
    if (computer === options[2]) {
      compWins();
    } else {
      playWins();
    }
  } else if (player === options[2]){
    if (computer === options[0]) {
      compWins();
    } else {
      playWins();
    }
  } else {
    console.log("INVALID CHOICE");
  }
}

function playAgain() {
  const playAgain = document.createElement('h3')
  playAgain.innerText = "Do you want to play again?";
  document.querySelector('body').appendChild(playAgain);
  
  const yes = document.createElement('button');
  yes.innerText = "Yes";
  document.querySelector('body').appendChild(yes);
  
  const no = document.createElement('button');
  no.innerText = "No";
  document.querySelector('body').appendChild(no);
  
  yes.onclick = function () {
    document.querySelector('h2').remove();
    document.querySelector('button').remove();
    document.querySelector('button').remove();
    document.querySelector('button').remove();
    document.querySelector('button').remove();
    document.querySelector('button').remove();
    document.querySelector('p').remove();
    document.querySelector('h3').remove();
 
    gameLoop();
  };
  
  no.onclick = function () {
    document.querySelector('h2').remove();
    document.querySelector('button').remove();
    document.querySelector('button').remove();
    document.querySelector('button').remove();
    document.querySelector('button').remove();
    document.querySelector('button').remove();
    document.querySelector('p').remove();
    document.querySelector('h3').remove();
    player.score = 0;
    computer.score = 0;
    introText();
  };

}

function compWins (){
  computer.score += 1;
  const winnerText = document.createElement('p')
  winnerText.innerText = "The Computer Wins! The computer chose " + computer.choice + " and the player chose " + player.choice + ". The Score is CPU: " + computer.score +" vs  PLAY: " + player.score;
  document.querySelector('body').appendChild(winnerText);
  playAgain();
}

function tie() {
  computer.score += 1;
  player.score += 1;
  const tieText = document.createElement('p')
  tieText.innerText = "This has resulted in a tie! Both the player and computer chose " + player.choice + ". The Score is CPU: " + computer.score +" vs  PLAY: " + player.score;
  document.querySelector('body').appendChild(tieText);
  playAgain();
}

function playWins () {
  player.score += 1;
  const winnerText = document.createElement('p')
  winnerText.innerText = "The Player Wins! The computer chose " + computer.choice + " and the player chose " + player.choice + ". The Score is CPU: " + computer.score +" vs  PLAY: " + player.score;
  document.querySelector('body').appendChild(winnerText);
  playAgain();
}