let userScorePara = document.querySelector("#user_score");
let compScorePara = document.querySelector("#Comp_score")

let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");


const genComputerChoice = () =>{
    //rock , paper, scissors;
    const options = ["rock","paper","scissors"];
    const randomidx = Math.floor(Math.random()*3);
    return options[randomidx];
}

const drawGame = () =>{
    console.log("game was draw.")
    msg.innerText = "Draw Game";
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin, userChoice, compchoice) => {
    if(userWin){
        console.log("You win");
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        console.log("You lose");
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lose! ${compchoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) =>{
    console.log("user choice = ", userChoice);
    // Generate computer choice
    const compchoice = genComputerChoice();
    console.log("comp choice =", compchoice);

    if(userChoice === compchoice){
        // draw game
        drawGame();
        return;
    }
    let userWin = true;
    if(userChoice === "rock"){
            //paper , scissor
        userWin = compchoice === "paper" ? false : true;
    }else if(userChoice === "paper"){
            //rock, scissors
        userWin = compchoice === "scissors" ? false : true;
    }else{
            //paper ,scissors
        userWin = compchoice === "rock" ? false : true;
    }
    

    showWinner(userWin, userChoice, compchoice);
}

choices.forEach((choice) =>{
    choice.addEventListener("click",()=>{
       const userChoice = choice.getAttribute("id");
       playGame(userChoice);

    })
})