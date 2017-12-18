/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores, roundScore, activePlayer;

init ();

document.querySelector(".btn-roll").addEventListener("click", function () {
    //1.Random Number
    var dice = Math.floor(Math.random() * 6 ) + 1;
    //Display Result
    var diceDOM = document.querySelector(".dice");
    diceDOM.style.display = "block";
    diceDOM.src = "/Users/brandon/Documents/code/Javascript-Project/4-DOM-Pig-Game/dice-" + dice + ".png";

    //Update round score if the rolled num isn't 1
    if(dice !== 1) {
        //add score
        roundScore += dice;
        document.querySelector("#current-" + activePlayer).textContent = roundScore;
    } else {
        nextPlayer();
        
    }

});

document.querySelector(".btn-hold").addEventListener("click", function () {
    //add current score to global score
    scores[activePlayer] += roundScore;
    //update the UI
    document.querySelector("#score-" + activePlayer).textContent = scores[activePlayer];

    //check if the player won the game
    if(scores[activePlayer] >= 20) {
        document.querySelector("#name-" + activePlayer).textContent = "Winner!";
        document.querySelector(".dice").style.display = "none";
        document.querySelector(".player-" + activePlayer + "-panel").classList.add("winner");
        document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active");
        
    } else {
        //Next Player
        nextPlayer();
    }
});

function nextPlayer () {
    //Next player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById("current-0").textContent = "0";
    document.getElementById("current-1").textContent = "0";

    //document.querySelector("player-0-panel").classList.remove("active");
    //document.querySelector("plauer-1-panel").classList.add("active");

    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");

    document.querySelector(".dice").style.display = "none";

}

document.querySelector(".btn-new").addEventListener("click", init);

function init () {
    scrores = [0, 0];
    activePlayer = 0;
    activePlayer = 0;

    document.querySelector(".dice").style.display = "none";
    
    document.getElementById("score-0").textContent = "0";
    document.getElementById("score-1").textContent = "0";
    document.getElementById("current-0").textContent = "0";
    document.getElementById("current-1").textContent = "0";    
    document.getElementById("name-0").textContent = "Player 1";
    document.getElementById("name-1").textContent = "Player 2";
    
}


// dice = Math.floor(Math.random() * 6 ) + 1;
// console.log(dice);
// document.querySelector("#current-" + activePlayer).textContent = dice;
// //document.querySelector("#current" + activePlayer).innerHTML = "<em> "+ dice + "</em>";
// var x = document.querySelector("#score-0").textContent;
// console.log(x);
/*
Terinary operator
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;

*/


