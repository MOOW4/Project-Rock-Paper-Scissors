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


   let score = 0;
   const buttonsContainer = document.getElementById('buttons-container');
   const button_rock = document.createElement('button');
   button_rock.textContent = "Rock";
   button_rock.addEventListener("click", function() {

      const computerSelection = getComputerChoice();
      playerSelection = "rock";
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
   });

   const button_paper = document.createElement('button');
   button_paper.textContent = "Paper";
   button_paper.addEventListener("click", function() {

      const computerSelection = getComputerChoice();
      playerSelection = "paper";
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
   });

   const button_scissors = document.createElement('button');
   button_scissors.textContent = "Scissors";
   button_scissors.addEventListener("click", function() {

      const computerSelection = getComputerChoice();
      playerSelection = "scissors";
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
   });

   buttonsContainer.appendChild(button_rock);
   buttonsContainer.appendChild(button_scissors);
   buttonsContainer.appendChild(button_paper);

      //const playerSelection = prompt("Rock/Paper/Scissors");
      //console.log(playerSelection, computerSelection);
      /*
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
      */