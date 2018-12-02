const userScore = 0;
const comptScore = 0;
const userScore_span = document.getElementById("user-score");
const comptScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");


function getComputerChoices(){
	const choices = ["r","p","s"];
	const randomNumber = Math.floor(Math.random() * 3);
	return choices[randomNumber];
}

function game(userChoice) {
	const computerChoice = getComputerChoices();
	switch(userChoice + computerChoice){
		case "rs":
		case "pr":
		case "sp":
			console.log("User Wins");
			break;
		case "rp":
		case "ps":
		case "sr":
			console.log("User loses");
			break;	
		case "rr":
		case "pp":
		case "ss":
			console.log("DRAW");
			break;
	}
}

function main() {
	rock_div.addEventListener("click",function(){
		game("r");
	});

	paper_div.addEventListener("click",function(){
		game("p");
	});

	scissors_div.addEventListener("click",function(){
		game("s");
	});	
}

main();