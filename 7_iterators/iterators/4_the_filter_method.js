// filter returns a new array after filtering out elements from the original array

// the callback function should be something that returns true or false for every element passed to it

// filter returns a new array

const randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below
const smallNumbers = randomNumbers.filter(randomNumber => randomNumber < 250);

console.log(smallNumbers);

const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];


// Call .filter() on favoriteWords below
const longFavoriteWords = favoriteWords.filter(favoriteWord => favoriteWord.length > 7);

console.log(longFavoriteWords);
