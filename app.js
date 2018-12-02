let userScore = 0;
let comptScore = 0;
const userScore_span = document.getElementById("user-score");
const comptScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");


function getComputerChoices(){
	const choices = ["r","p","s"];
	const randomNumber = Math.floor(Math.random() * 3);
	return choices[randomNumber];
}

function convert(letter){
	if(letter== "r") return "Rock";
	if(letter== "p") return "Paper";
	if(letter== "s") return "Scissors";
}

function win(user, computer){
	userScore++;
	userScore_span.innerHTML = userScore;
	comptScore_span.innerHTML = comptScore;
	result_div.innerHTML = `${convert(user)} beats ${convert(computer)}. You win!`;
}

function lose(user, computer){
	comptScore++;
	userScore_span.innerHTML = userScore;
	comptScore_span.innerHTML = comptScore;
	result_div.innerHTML = `${convert(user)} loses to ${convert(computer)}. You lose!`;
}

function draw(user, computer){
	userScore_span.innerHTML = userScore;
	comptScore_span.innerHTML = comptScore;
	result_div.innerHTML = `${convert(user)} equals to ${convert(computer)}. It's a draw.`;
}

function game(userChoice) {
	const computerChoice = getComputerChoices();
	switch(userChoice + computerChoice){
		case "rs":
		case "pr":
		case "sp":
			win(userChoice, computerChoice);
			break;
		case "rp":
		case "ps":
		case "sr":
			lose(userChoice, computerChoice);
			break;	
		case "rr":
		case "pp":
		case "ss":
			draw(userChoice, computerChoice);
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