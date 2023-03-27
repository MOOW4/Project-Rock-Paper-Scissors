function getComputerChoice() {
	let options = ["rock", "paper", "scissors"];
	let pc_choice = Math.floor(Math.random() * 3);
	return options[pc_choice];
}
function disable_buttons() {
	button_rock.disabled = true;
	button_paper.disabled = true;
	button_scissors.disabled = true;
}

function playRound(playerSelection, computerSelection) {
	playerSelection = playerSelection.toLowerCase();

	if (playerSelection === computerSelection) {
		return undefined;
	} else if (computerSelection === "rock") {
		switch (playerSelection) {
			case "paper":
				return true;
				break;
			case "scissors":
				return false;
				break;
		}
	} else if (computerSelection === "paper") {
		switch (playerSelection) {
			case "rock":
				return false;
				break;
			case "scissors":
				return true;
				break;
		}
	} else if (computerSelection === "scissors") {
		switch (playerSelection) {
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
const results = document.getElementById("results");
const buttonsContainer = document.getElementById("buttons-container");
let output_message = document.createElement("p");

const button_rock = document.createElement("button");
button_rock.textContent = "Rock";
const button_paper = document.createElement("button");
button_paper.textContent = "Paper";
const button_scissors = document.createElement("button");
button_scissors.textContent = "Scissors";

button_rock.addEventListener("click", function handleButtonClick() {
	const computerSelection = getComputerChoice();
	playerSelection = "rock";
	console.log(playerSelection, computerSelection);

	if (playRound(playerSelection, computerSelection) === true) {
		score++;
		output_message.innerText = `Congratulations! You won this round!\n${score}`;
		if (score === 5) {
			output_message.innerText += `\nYou won the game!`;
			disable_buttons();
		}
	} else if (playRound(playerSelection, computerSelection) == undefined) {
		output_message.innerText = `It's a tie!\n${score}`;
	} else {
		score--;
		output_message.innerText = `Unfortunately, you lost this round! \n${score}`;
		if (score === -5) {
			output_message.innerText += `\nYou lost the game loser!`;
			disable_buttons();
		}
	}
});

button_paper.addEventListener("click", function handleButtonClick() {
	const computerSelection = getComputerChoice();
	playerSelection = "paper";
	console.log(playerSelection, computerSelection);

	if (playRound(playerSelection, computerSelection) === true) {
		score++;
		output_message.innerText = `Congratulations! You won this round!\n${score}`;
		if (score === 5) {
			output_message.innerText += `\nYou won the game!`;
			disable_buttons();
		}
	} else if (playRound(playerSelection, computerSelection) == undefined) {
		output_message.innerText = `It's a tie!\n${score}`;
	} else {
		score--;
		output_message.innerText = `Unfortunately, you lost this round! \n${score}`;
		if (score === -5) {
			output_message.innerText += `\nYou lost the game loser!`;
			disable_buttons();
		}
	}
});

button_scissors.addEventListener("click", function handleButtonClick() {
	const computerSelection = getComputerChoice();
	playerSelection = "scissors";
	console.log(playerSelection, computerSelection);

	if (playRound(playerSelection, computerSelection) === true) {
		score++;
		output_message.innerText = `Congratulations! You won this round! \n${score}`;
		if (score === 5) {
			output_message.innerText += `\nYou won the game!`;
			disable_buttons();
		}
	} else if (playRound(playerSelection, computerSelection) == undefined) {
		output_message.innerText = `It's a tie!\n${score}`;
	} else {
		score--;
		output_message.innerText = `Unfortunately, you lost this round! \n${score}`;
		if (score === -5) {
			output_message.innerText += `\nYou lost the game loser!`;
			disable_buttons();
		}
	}
});

buttonsContainer.appendChild(button_rock);
buttonsContainer.appendChild(button_scissors);
buttonsContainer.appendChild(button_paper);
results.appendChild(output_message);
