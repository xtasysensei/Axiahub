const screen = document.querySelector(".disp");
const button = document.querySelectorAll(".btn");

for (content of button) {
	content.addEventListener("click", (event) => {
		buttonContent = event.target.innerHTML;
		if (buttonContent == "x") {
			buttonContent = "*";
		}

		if (buttonContent == "÷") {
			buttonContent = "/";
		}

		screen.value += buttonContent;
	});
}

function per() {
	screen.value = screen.value / 100;
}

function factorial() {
	let f = 1;
	num = screen.value;
	for (i = 1; i <= num; i++) {
		f = f * i;
	}
	i = i - 1;

	screen.value = f;
}

function sin() {
	screen.value = Math.sin(screen.value);
}

function cos() {
	screen.value = Math.cos(screen.value);
}

function tan() {
	screen.value = Math.tan(screen.value);
}

function pow() {
	screen.value = Math.pow(screen.value, 2);
}

function sqrt() {
	screen.value = Math.sqrt(screen.value, 2);
}

function log() {
	screen.value = Math.log(screen.value);
}

function π() {
	screen.value = 3.14159265459;
}
