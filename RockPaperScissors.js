//This will be the JS supporting the Rock, Paper, Scissors game//

const hands = ["Rock", "Paper", "Scissors"];
const youDisplay = document.getElementById("youDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");

function play (playerChoice){
    const computerChoice = hands[Math.floor (Math.random() * 3)];
    let result = "";

    console.log(computerChoice);
    if(playerChoice === computerChoice){
        result="It’s a draw!";
        }
    else{
     switch(playerChoice){
        case "Rock":
            result=(computerChoice === "Scissors") ? "You win!" : "You lose!";
            break;
        case "Paper":
            result=(computerChoice === "Rock") ? "You win!" : "You lose!";
            break;
        case "Scissors" :
            result=(computerChoice === "Paper") ? "You win!" : "You lose!";
            break;
     }  
    }
    youDisplay.textContent = `You play: ${playerChoice}`;
    computerDisplay.textContent = `Your opponent plays: ${computerChoice}`;
    resultDisplay.textContent = result;
}
