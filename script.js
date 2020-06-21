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
  titleText.id = 'titleText'; 

  const subTitle = document.createElement('h2');
  subTitle.innerText = "Welcome to the Game!";
  document.querySelector('body').appendChild(subTitle);
  subTitle.id = 'subTitle';  

  const button = document.createElement('button');
  button.innerText = "Click to Play!";
  document.querySelector('body').appendChild(button);
  button.id = 'play';  
  
  document.querySelector('button').onclick = function(){
    titleText.remove();
    subTitle.remove();
    button.remove();
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
  instructions.id = 'instructions';
  document.querySelector('body').appendChild(instructions);
  
  const rock = document.createElement('button');
  rock.innerText = "Lapis";
  rock.id = 'rock';
  document.querySelector('body').appendChild(rock);

  
  const paper = document.createElement('button');
  paper.innerText = "Papyrus";
  paper.id = 'paper';
  document.querySelector('body').appendChild(paper);
  
  const scissors = document.createElement('button');
  scissors.innerText = "Scalpellus";
  scissors.id = 'scissors';
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
  playAgain.id = 'again';
  document.querySelector('body').appendChild(playAgain);
  
  const yes = document.createElement('button');
  yes.innerText = "Yes";
  yes.id = 'yes';
  document.querySelector('body').appendChild(yes);
  
  const no = document.createElement('button');
  no.innerText = "No";
  no.id = 'no';
  document.querySelector('body').appendChild(no);
  
  yes.onclick = function () {
    document.querySelector('#again').remove();
    document.querySelector('#rock').remove();
    document.querySelector('#paper').remove();
    document.querySelector('#scissors').remove();
    document.querySelector('#yes').remove();
    document.querySelector('#no').remove();
    document.querySelector('.winner').remove();
    document.querySelector('#instructions').remove();
 
    gameLoop();
  };
  
  no.onclick = function () {
    document.querySelector('#again').remove();
    document.querySelector('#rock').remove();
    document.querySelector('#paper').remove();
    document.querySelector('#scissors').remove();
    document.querySelector('#yes').remove();
    document.querySelector('#no').remove();
    document.querySelector('.winner').remove();
    document.querySelector('#instructions').remove();
    player.score = 0;
    computer.score = 0;
    introText();
  };

}

function compWins (){
  computer.score += 1;
  const winnerText = document.createElement('p')
  winnerText.class = 'winner';
  winnerText.innerText = "The Computer Wins! The computer chose " + computer.choice + " and the player chose " + player.choice + ". The Score is CPU: " + computer.score +" vs  PLAY: " + player.score;
  document.querySelector('body').appendChild(winnerText);
  playAgain();
}

function tie() {
  computer.score += 1;
  player.score += 1;
  const tieText = document.createElement('p')
  tietext.class = 'winner';
  tieText.innerText = "This has resulted in a tie! Both the player and computer chose " + player.choice + ". The Score is CPU: " + computer.score +" vs  PLAY: " + player.score;
  document.querySelector('body').appendChild(tieText);
  playAgain();
}

function playWins () {
  player.score += 1;
  const winnerText = document.createElement('p')
  winnerText.class = 'winner';
  winnerText.innerText = "The Player Wins! The computer chose " + computer.choice + " and the player chose " + player.choice + ". The Score is CPU: " + computer.score +" vs  PLAY: " + player.score;
  document.querySelector('body').appendChild(winnerText);
  playAgain();
}