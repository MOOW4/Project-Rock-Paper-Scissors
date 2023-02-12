function getComputerChoice(){
   let options = ["rock","paper","scissors"];
   let pc_choice= Math.floor(Math.random() * 3 );
   return options[pc_choice];
}

function playRound(playerSelection, computerSelection) {
   playerSelection = playerSelection.toLowerCase();

   if (playerSelection === computerSelection) {
      return undefined;
   }
   else if ( computerSelection === "rock"){
      switch(playerSelection){
         case "paper":
            return true;
            break;
         case "scissors":
            return false;
            break;

      }
   }
   else if ( computerSelection === "paper"){
            switch(playerSelection){
         case "rock":
            return false;
            break;
         case "scissors":
            return true;
            break;
            
      }
   }
   else if ( computerSelection === "scissors"){
      switch(playerSelection){
         case "paper":
            return false;
            break;
         case "rock":
            return true;
            break;
            
      }
   }
}

function game() {
   let score = 0;

   for ( let i = 0; i < 5; i++){
      const playerSelection = prompt("Rock/Paper/Scissors");
      const computerSelection = getComputerChoice();
      console.log(playerSelection, computerSelection);

      if((playRound(playerSelection, computerSelection)) === true){
         console.log("Congratulations! You won this round!");
         score++;
      }
      else if (playRound(playerSelection, computerSelection) == undefined) {
         console.log("It's a tie!");
      }
      else{
         console.log("Unfortunately, you lost this round!")
      }
   }
}
game();


/*
const playerSelection = "paper";
const computerSelection = getComputerChoice();
console.log(playerSelection, computerSelection);
console.log(playRound(playerSelection, computerSelection));


if (playerSelection === computerSelection) {
      return ("It's a tie!");
   }
else {
      switch (computerSelection) {
         case "rock":
            switch(playerSelection){
               case "paper":
                  return ("Congratulations! You win!");
                  break;
               case "scissors":
                  return ("Unfortunately, you loose!");
                  break;
            break;
            }
         case "paper":
            switch(playerSelection){
               case "rock":
                  return ("Unfortunately, you loose!");
                  break;
               case "scissors":
                  return ("Congratulations! You win!");
                  break;
                  
            }
            break;
         case "scissors":
            switch(playerSelection){
               case "paper":
                  return ("Unfortunately, you loose!");
                  break;
               case "rock":
                  return ("Congratulations! You win!");
                  break;
                  
            }
            break;
      }
   }
*/