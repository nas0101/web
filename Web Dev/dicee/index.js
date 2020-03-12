var number = 0;


function getRandomNumber() {
  number = Math.random();
  number = (number * 6) + 1;
  number = Math.floor(number);

  return number;
}

function setDiceImage(randomNumber) {
  var diceImage = "";

  if (randomNumber === 1) {
    diceImage = "dice1.png";
  } else if (randomNumber === 2) {
    diceImage = "dice2.png";
  } else if (randomNumber === 3) {
    diceImage = "dice3.png";
  } else if (randomNumber === 4) {
    diceImage = "dice4.png";
  } else if (randomNumber === 5) {
    diceImage = "dice5.png";
  } else if (randomNumber === 6) {
    diceImage = "dice6.png";
  }

  return diceImage;
}

function setPlayer1() {
  var randomNumber1 = getRandomNumber();
  var image = "images/" + setDiceImage(randomNumber1);
  console.log(image);

  document.getElementsByClassName("img1")[0].setAttribute("src", image);

  return randomNumber1;
}

function setPlayer2() {
  var randomNumber2 = getRandomNumber();
  var image = "images/" + setDiceImage(randomNumber2);
  console.log(image);

  document.getElementsByClassName("img2")[0].setAttribute("src", image);

  return randomNumber2;
}

function setWinner() {
    var player1 = setPlayer1();
    var player2 = setPlayer2();
    var header = document.querySelector("h1");
    var winner = "images/red-flag.png";

    if (player1 > player2) {
      header.innerHTML = "<img class=winner src=images/red-flag.png> Player 1 Wins";
    } else if (player2 > player1) {
      header.innerHTML = "Player 2 Wins <img class=winner src=images/red-flag.png>";
    } else {
      header.textContent = "Draw";
    }
}

setWinner();
