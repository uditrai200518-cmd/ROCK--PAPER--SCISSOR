 let userScore = 0;
 let compScore = 0;

 const choices = document.querySelectorAll(".choice");
 const msg = document.querySelector("#msg");
 const userScorePara = document.querySelector("#user-score");
  const compScorePara = document.querySelector("#comp-score");


  const drawGame = () => {
   console.log("game was draw");
   msg.innerText="Game was draw. Play Again";
   msg.style.backgroundColor="black";
  }

  const showWinner = (userWin,userChoice,compChoice) => {
   if(userWin) {
      userScore++;
      userScorePara.innerText=userScore;
      console.log("you win!!"); 
      msg.innerText =`You Win Your ${userChoice} beats ${compChoice}`;
      msg.style.backgroundColor="green";

   }else{
      compScore++;
      compScorePara.innerText=compScore;
      console.log("you lose!!");
      
      msg.innerText=`You Lose!, ${compChoice} beats Your ${userChoice}`;
      msg.style.backgroundColor="red";
   }

  }
 const genComputerChoice = () => {
    const Option = ["rock","paper" , "scissor"];
    const ranIdx = Math.floor(Math.random() *3);
    return Option [ranIdx];

 }

 const playGame = (userChoice) => {
    console.log("user-choice =", userChoice)
    const compChoice = genComputerChoice();
        console.log("comp-choice =", compChoice);

        if(userChoice === compChoice){
      drawGame();
        }else {
         let userWin = true;
         if(userChoice=== "rock"){
            userWin = compChoice==="scissor" ? false : true;
         }else if (userChoice === "paper") {
            userWin = compChoice==="rock" ? false : true;
            
         } else {
            userWin= compChoice==="paper" ? false : true;

         }
         showWinner(userWin,userChoice,compChoice);
      }
        
    };

 

 choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
         playGame(userChoice);
    });

});