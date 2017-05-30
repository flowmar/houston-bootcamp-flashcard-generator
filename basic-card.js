/*Rules: 1. define a node modle that exports a constructir
for creating basic flashcards(module.exports = basicCard;)
2. Constuctor needs 2 arguments, front and back
3. constructed object needs a front property with the text
for the front of the card(full)
4. the construckted object also needs a back property with the back of the card text */

function BasicCard(front, back) {
    this.front = front;
    this.back = back;
}

module.exports = BasicCard;

var card1 = new BasicCard("What is the capital of Maryland?", "Annapolis");
var card2 = new BasicCard("What is the meaning of life", "Pizza, of course");

console.log(card1);
console.log(card2);