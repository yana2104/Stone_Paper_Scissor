let userScore=0;
let computerScore=0;
let userScorePara=document.querySelector("#User-score");
let computerScorePara=document.querySelector("#Computer-score");
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const newGame=document.querySelector("#new-game");
//generate computer's choice
const getComputerChoice=()=>{
    const options=["rock","paper","scissors"];
    const randIndex=Math.floor(Math.random()*3);
    return options[randIndex];
}
const playGame=(userChoice)=>{
    const computerChoice=getComputerChoice();
    if(userChoice===computerChoice){
        drawGame();
    } 
    else{
        let userWin=true;
        if(userChoice==="rock")
            userWin=computerChoice==="paper"?false:true;  
        else if(userChoice==="paper")
            userWin=computerChoice==="scissor"?false:true;
        else
           userWin=computerChoice==="rock"?false:true;
           showWinner(userWin,userChoice,computerChoice);
        }
};
const showWinner=(userWinner,userChoice,computerChoice)=>{
    if(userWinner)
    {
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`You Win! Your ${userChoice} beats ${computerChoice}`;
        msg.style.backgroundColor="darkgreen";
    }
    else
    {
        msg.innerText=`You Lose! ${userChoice} beats your ${computerChoice}`;
        computerScore++;
        computerScorePara.innerText=computerScore;
        msg.style.backgroundColor="red";
    }   
}
const drawGame=()=>{
    msg.innerText="Game is drawn!";
    msg.style.backgroundColor="purple";
}
//user's choice
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});
//new game
const resetGame=()=>{
    userScore=0;
    computerScore=0;
    userScorePara.innerHTML=userScore;
    computerScorePara.innerHTML=computerScore;
}
newGame.addEventListener("click",resetGame);

