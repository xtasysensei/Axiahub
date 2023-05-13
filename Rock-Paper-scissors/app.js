// const buttons = document.querySelector("button");
// const you = document.querySelector(".you");
// const aiText = document.querySelector(".ai");
// const display = document.querySelector(".display");

// let random = Math.floor(Math.random * 3);

// paper.addEventListener("click", playPaper);
// rock.addEventListener("click", playRock);
// scissors.addEventListener("click", playScissor);

// function playPaper() {
// 	let text = (aiText.innerHTML = button[random].textContent);
// 	let player = (you.innerHTML = "paper");

// 	if (text === player) {
// 		display.innerHTML = "you win";
// 	} else {
// 		display.innerHTML = "you lose";
// 	}
// }

// function playScissor() {
// 	let text = (aiText.innerHTML = button[random].textContent);
// 	you.innerHTML = "Scissors";

// 	if (text === player) {
// 		display.innerHTML = "you win";
// 	} else {
// 		display.innerHTML = "you lose";
// 	}
// }

// function playRock() {
// 	let text = (aiText.innerHTML = button[random].textContent);
// 	you.innerHTML = "Rock";

// 	if (text === player) {
// 		display.innerHTML = "you win";
// 	} else {
// 		display.innerHTML = "you lose";
// 	}
// }

const buttons = document.querySelectorAll("button");
const you = document.querySelector(".you");
const ai = document.querySelector(".ai");
const display = document.querySelector(".display");

buttons.forEach((button) => {
	button.addEventListener("click", () => {
		let aiText = buttons[Math.floor(Math.random() * 3)].textContent;

		if (button.textContent == aiText) {
			display.innerHTML = "Draw";
			ai.innerHTML = aiText;
			you.innerHTML = button.textContent;
		} else if (
			(button.textContent == "Rock" && aiText == "Paper") ||
			(button.textContent == "Paper" && aiText == "Scissors") ||
			(button.textContent == "Scissors" && aiText == "Rock")
		) {
			display.innerHTML = "CPU wins, You lose";
			ai.innerHTML = aiText;
			you.innerHTML = button.textContent;
		} else {
			display.innerHTML = "CPU lost, You win";
			ai.innerHTML = aiText;
			you.innerHTML = button.textContent;
		}
	});
});
