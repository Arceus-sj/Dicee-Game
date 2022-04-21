//random number genrator between 1 - 6
function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

//setting images according to random nmber
function changeImgTORandomValue(randomNumber, playerValue) {
    if(randomNumber === 1) {
        playerValue.setAttribute('src', './asset/dice1.png')
        playerValue.setAttribute('alt', 'Dice 1');
    }
    else if(randomNumber === 2) {
        playerValue.setAttribute('src', './asset/dice2.png')
        playerValue.setAttribute('alt', 'Dice 2');
    }
    else if(randomNumber === 3) {
        playerValue.setAttribute('src', './asset/dice3.png')
        playerValue.setAttribute('alt', 'Dice 3');
    }
    else if(randomNumber === 4) {
        playerValue.setAttribute('src', './asset/dice4.png')
        playerValue.setAttribute('alt', 'Dice 4');
    }
    else if(randomNumber === 5) {
        playerValue.setAttribute('src', './asset/dice5.png')
        playerValue.setAttribute('alt', 'Dice 5');
    }
    else if(randomNumber === 6) {
        playerValue.setAttribute('src', './asset/dice6.png')
        playerValue.setAttribute('alt', 'Dice 6');
    }
}


function declareWinner(randomNumber1, randomNumber2) {
    
    let winner = document.querySelector('h1');

    if(randomNumber1 > randomNumber2) {
        winner.textContent = "🚩 Player 1 wins!";
    }
    else if(randomNumber2 > randomNumber1) {
        winner.textContent = "Player 2 wins! 🚩";
    }
    else if(randomNumber1 === randomNumber2){
        winner.textContent = "Draw!";
    }
}

//Player-1
let randomNumber1 = getRandomNumber(1,7);
let firstPlayer = document.querySelector('.player-1 .img-el');
changeImgTORandomValue(randomNumber1, firstPlayer)

//Player-2
let randomNumber2 = getRandomNumber(1,7);
let secondPlayer = document.querySelector('.player-2 .img-el');
changeImgTORandomValue(randomNumber2, secondPlayer);

//declare winner
declareWinner(randomNumber1, randomNumber2);