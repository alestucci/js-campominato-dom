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
	let bombs = 0;
	let columns = 0;

	switch (difficulty) {
		case "easy":
			squares = 100;
			bombs = 10;
			columns = 10;
			field.classList.add("field-100");
			break;
		case "medium":
			squares = 81;
			bombs = 12;
			columns = 9;
			field.classList.add("field-81");
			break;
		case "hard":
			squares = 49;
			bombs = 14;
			columns = 7;
			field.classList.add("field-49");
			break;
	}
	//console.log(squares);
	const bombsArray = [];
	while (bombsArray.length < bombs) {
		let randomNumber = Math.floor(Math.random() * (squares - 1) + 1);
		if (bombsArray.indexOf(randomNumber) == -1) {
			bombsArray.push(randomNumber);
		}
	}
	console.log("ELENCO BOMBE");
	console.log(bombsArray);
	const solutionArray = [];
	for (let indexSolution = 1; indexSolution <= squares; indexSolution++) {
		if (bombsArray.indexOf(indexSolution) == -1) {
			solutionArray.push(indexSolution);
		}
	}
	console.log("SOLUZIONE");
	console.log(solutionArray);

	const cellSelected = [];
	for (let index = 1; index <= squares; index++) {
		let box = document.createElement("div");
		box.classList.add("square");
		box.id = "n" + index;
		box.innerHTML = index;
		box.addEventListener("click", function () {
			squareSelection(box);
			const aroundBombs = checkBomb(index, columns, bombsArray, cellSelected);
			box.innerHTML = aroundBombs;
			checkArray(cellSelected, squares, bombs);
			selectToArray(index, cellSelected);
			console.log(cellSelected.length);
		});
		field.append(box);
	}
}

function squareSelection(target) {
	target.classList.toggle("selected");
}
const scoreWin = document.getElementById("score-win");
const loseMessageWindow = document.querySelector(".lose");
const winMessageWindow = document.querySelector(".win");

loseMessageWindow.addEventListener("click", function () {
	loseMessageWindow.classList.remove("active");
	// const field = document.querySelector(".field");
	// field.innerHTML = "";
	// field.classList = "field";
});

winMessageWindow.addEventListener("click", function () {
	winMessageWindow.classList.remove("active");
	// const field = document.querySelector(".field");
	// field.innerHTML = "";
	// field.classList = "field";
});

function squareSelection(target) {
	target.classList.toggle("selected");
}

function selectToArray(value, array) {
	let indexSelection = array.indexOf(value);
	if (indexSelection == -1) {
		array.push(value);
	} else {
		array.splice(indexSelection, 1);
	}
}

function checkBomb(value, columns, arrayBombs, arraySelected) {
	let aroundBombs = "";
	// console.log(value - (columns - 1));
	// console.log(value - columns);
	// console.log(value - (columns + 1));
	// console.log(value - 1);
	// console.log(value + 1);
	// console.log(value + (columns - 1));
	// console.log(value + columns);
	// console.log(value + (columns + 1));
	if (arrayBombs.indexOf(value) > -1) {
		aroundBombs = "&#128163;";
		const loseMessage = document.querySelector(".lose");
		const scoreLose = document.getElementById("score-lose");
		scoreLose.innerHTML = arraySelected.length;
		loseMessage.classList.add("active");
	} else {
		// if (arrayBombs.indexOf(value - (columns - 1)) > -1) {
		// 	aroundBombs += 1;
		// }
		// if (arrayBombs.indexOf(value - columns) > -1) {
		// 	aroundBombs += 1;
		// }
		// if (arrayBombs.indexOf(value - (columns + 1)) > -1) {
		// 	aroundBombs += 1;
		// }
		// if (arrayBombs.indexOf(value - 1) > -1) {
		// 	aroundBombs += 1;
		// }
		// if (arrayBombs.indexOf(value + 1) > -1) {
		// 	aroundBombs += 1;
		// }
		// if (arrayBombs.indexOf(value + (columns - 1)) > -1) {
		// 	aroundBombs += 1;
		// }
		// if (arrayBombs.indexOf(value + columns) > -1) {
		// 	aroundBombs += 1;
		// }
		// if (arrayBombs.indexOf(value + (columns + 1)) > -1) {
		// 	aroundBombs += 1;
		// }
	}
	return aroundBombs;
}

function checkArray(arraySelected, squares, bombs) {
	if (arraySelected.length == squares - bombs) {
		const winMessage = document.querySelector(".win");
		const scoreWin = document.getElementById("score-win");
		winMessage.classList.add("active");
		scoreWin.innerHTML = arraySelected.length;
	}
}

// function score()
