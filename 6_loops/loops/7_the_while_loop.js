// The while loop executes while a condition is truthy.

// While loops can run infinitely which is bad

// They can be used when a loop needs to execute an unknown number of times

// This program "draws" cards until a spade is drawn.

const cards = ['diamond', 'spade', 'heart', 'club'];

// Write your code below

let currentCard

while (currentCard != 'spade') {
  currentCard = cards[Math.floor(Math.random() * 4)];
  console.log(currentCard);
}
