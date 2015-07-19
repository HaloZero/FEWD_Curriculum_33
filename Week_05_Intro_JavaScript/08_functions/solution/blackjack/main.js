var humanHand = 0;

// The bot will draw up to a minimum of 18 and a maximum
// of 24. Which means half the time he will get 18-21
// and the other half of the time he will bust
function botScore() {
	return Math.floor((Math.random() * 6)+18);
}

function drawACard() {
	var cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10];
	return cards[Math.floor(Math.random()*cards.length)];
}


function hit() {
	var card = drawACard();
	var newHand = humanHand+card;
	humanHand = newHand;
	document.getElementById("human_hand").innerHTML = humanHand;
	if (humanHand > 21) {
		document.getElementById("result").innerHTML = "You Busted";
	}
}

function stay() {
	var botHand = botScore();
	document.getElementById("bot_hand").innerHTML = botHand;
	if (botHand > 21) {
		document.getElementById("result").innerHTML = "Bot busted. You Win";
	} else if (botHand > humanHand) {
		document.getElementById("result").innerHTML = "Bot Win";
	} else if (humanHand > botHand) {
		document.getElementById("result").innerHTML = "You Win";
	} else if (botHand == humanHand) {
		document.getElementById("result").innerHTML = "Bot Win";
	}
}

function newGame() {
	humanHand = 0;
	document.getElementById("human_hand").innerHTML = humanHand;
	document.getElementById("bot_hand").innerHTML = humanHand;
	document.getElementById("result").innerHTML = "";

}

document.getElementById("hit").onclick = hit;
document.getElementById("stay").onclick = stay;
document.getElementById("new-game").onclick = newGame;