///starting declarations
let symbols = document.querySelectorAll(".gameSymbol");
let result = document.querySelector(".result");
let playerScore = document.querySelector("#playerScore");
let computerScore = document.querySelector("#computerScore");
let player_selection = "";
let computer_select = "";
let winner = "";
let playerWinCount = 0;
let computerWinCount = 0;

function computer_selection(){
    option = ["rock","paper","scissor"];
    computer = option[Math.floor(Math.random()*option.length)];
    return computer
}

const handler = (e) =>{
    player_selection = e.target.getAttribute("id");
    computer_select = computer_selection();
    winner = decideResult(player_selection,computer_select)
    announceWinner(winner)
}

const resetHandler = () =>{
    result.innerText = "";
    playerScore.innerText = "";
    computerScore.innerText = "";
    player_selection = "";
    computer_select = "";
    winner = "";
    playerWinCount = 0;
    computerWinCount = 0;
}

function decideResult(player,computer){
    if(player=="rock" && (computer=="paper" || computer=="scissor")){
        winner = `Player's rock beats computer's ${computer}`;
        playerWinCount++;
    }
    else if(player=="paper" && (computer=="rock" || computer=="scissor")){
        winner = `Computer's ${computer} beats player's ${player}`;
        computerWinCount++;
    }
    else if(player=="scissor" && computer=="rock"){
        winner = `Computer's rock beats player's scissor`;
        computerWinCount++;
    }
    else if(player=="scissor" && computer=="paper"){
        winner = `Player's scissor beats computer's ${computer}`;
        playerWinCount++;
    }
    else if(player===computer){
        winner="Match Draw";
    }
    return winner;
} 
function announceWinner(winner){
    
    result.innerText = winner;
    
    playerScore.innerText = playerWinCount;
    computerScore.innerText = computerWinCount;
    computer_select = "";
    winner = "";
}       

symbols.forEach(symbol => {
    symbol.addEventListener("click",handler)});

let reset = document.querySelector("#reset");
reset.addEventListener("click",resetHandler);

