var cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png"
	},
	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png"
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png"
	},
	{
		rank: "king",
		suit: "diamonds",
		cardImage: 	"images/king-of-diamonds.png"
	}
];
var cardsInPlay = [];

var checkForMatch = function(image){
	var cardID = image.getAttribute('data-id');
	image.setAttribute('src', cards[cardID].cardImage)
	if (cardsInPlay.length === 2) {
		if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
		} else if (cardsInPlay[0] != cardsInPlay[1]) {
		alert("Sorry, try again.");
		}
	}
}	
var flipCard = function(){
	var cardID = this.getAttribute('data-id');
	console.log("User flipped " + cards[cardID].rank);
	cardsInPlay.push(cards[cardID].rank);
	checkForMatch(this);
	console.log(cards[cardID].cardImage);
	console.log(cards[cardID].rank);
}
var createBoard = function() {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		document.getElementById('game-board').appendChild(cardElement);
		cardElement.addEventListener('click', flipCard);
	}
}
createBoard();

var resetBoard = function() {
	var images = document.getElementsByTag('img');
	for (var i = 0; i < images.length; i++) {
	 	images[i].setAttribute('src', 'images/back.png');
	 } 	 
}
var resetButton = document.querySelector('button');
resetButton.addEventListener('click', resetBoard);
