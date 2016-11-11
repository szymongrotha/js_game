var newGameBtn = document.getElementById('js-newGameButton')
	pickRock = document.getElementById('js-playerPick_rock'),
	pickPaper = document.getElementById('js-playerPick_paper'),
	pickScissors = document.getElementById('js-playerPick_scissors'),
	newGameBtn = document.getElementById('js-newGameButton'),
	newGameElem = document.getElementById('js-newGameElement'),
	pickElem = document.getElementById('js-playerPickElement')
	resultsElem = document.getElementById('js-resultsTableElement')
	playerPointsElem = document.getElementById('js-playerPoints'),
	playerNameElem = document.getElementById('js-playerName'),
	computerPointsElem = document.getElementById('js-computerPoints')
	playerPickElem = document.getElementById('js-playerPick'),
	computerPickElem = document.getElementById('js-computerPick'),
	playerResultElem = document.getElementById('js-playerResult'),
	computerResultElem = document.getElementById('js-computerResult');
	gameState = 'notStarted',
		player = {
			name: '',
			score: 0
		},
		computer = {
			score: 0
		};

pickRock.addEventListener('click', function() { playerPick('rock')});
pickPaper.addEventListener('click', function() { playerPick('paper')});
pickScissors.addEventListener('click', function() { playerPick('scissors')});
newGameBtn.addEventListener('click', newGame);

function setGameElements() {
	switch(gameState) {
		case 'started':
			newGameElem.style.display = 'none';
			pickElem.style.display = 'block';
			resultsElem.style.display = 'block';
			playerPointsElem.display = 'block';

		break;
		case 'ended':
			newGameBtn.innerText = 'Jeszcze raz';
		case 'notStarted':
		default:
			newGameElem.style.display = 'block';
			pickElem.style.dispaly = 'none';
			resultsElem.style.display = 'none'; 
	}
}

setGameElements();

function newGame() {
	player.name = prompt('Podaj swoje imie', 'Twoje Imie');
		if (player.name) {
			player.score = computer.score = 0;
			gameState = 'started';
			setGameElements();

			playerNameElem.innerHTML = player.name;
				setGamePoints();
		}
}

function playerPick(playerPick) {
	var computerPick = getComputerPick();

	playerPickElem.innerHTML = playerPick;
	computerPickElem.innerHTML = computerPick;

	checkRoundWinner(playerPick, computerPick);
}

function getComputerPick() {
	var possiblePicks = ['rock', 'paper', 'scissors'];
	return possiblePicks[Math.floor(Math.random()*3)];
}

function checkRoundWinner(playerPick, computerPick) {
	playerResultElem.innerHTML = computerResultElem.innerHTML = '';

	var winnerIs = 'player';

	if (playerPick == computerPick) {
		winnerIs = 'noone'; //remis
	} else if (
		(computerPick == 'rock' && playerPick == 'scissors') ||
		(computerPick == 'scissors' && playerPick == 'paper') ||
		(computerPick == 'paper' && playerPick == 'rock')) {

		winnerIs = 'computer';
	}

	if (winnerIs == 'player') {
		playerResultElem.innerHTML = "Wygrana!";
		player.score++;
		playerPointsElem.innerHTML = player.score;
	} else if (winnerIs == 'computer') {
		computerResultElem.innerHTML = "Wygrana!";
		computer.score++;
		computerPointsElem.innerHTML = computer.score;
	}

	if (player.score == '10') {
		alert('Wygrał ' + player.name + ' 10 PKT!')
		gameState = 'ended'
		setGameElements()
	
	} else if (computer.score == '10' ) {
		alert('Wygrał komputer! 10 PKT!')
		gameState = 'ended'
		setGameElements()
		
	}
}

function setGamePoints() {
	playerPointsElem.innerHTML = player.score;
	computerPointsElem.innerHTML = computer.score;
}

