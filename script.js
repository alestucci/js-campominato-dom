let playBtn = document.getElementById("play");
//console.log(playBtn);
playBtn.addEventListener("click", playGame);

function playGame() {
	const difficulty = document.getElementById("difficulty").value;
	//console.log(difficulty);
	const field = document.querySelector(".field");
	//console.log(field);
	field.innerHTML = "";
	field.classList = "field";
	let squares = 0;

	switch (difficulty) {
		case "easy":
			squares = 49;
			field.classList.add("field-49");
			break;
		case "medium":
			squares = 81;
			field.classList.add("field-81");
			break;
		case "hard":
			squares = 100;
			field.classList.add("field-100");
			break;
	}
	//console.log(squares);
	for (let index = 1; index <= squares; index++) {
		let box = document.createElement("div");
		box.classList.add("square");
		box.id = "n" + index;
		box.innerHTML = index;
		box.addEventListener("click", function () {
			squareSelection(box);
		});
		field.append(box);
	}
}

function squareSelection(target) {
	target.classList.toggle("selected");
}
