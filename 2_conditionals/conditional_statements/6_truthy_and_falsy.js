// In JavaScript, everything has a truthy or falsy value that allows them to be evaluated in boolean expressions

/* Falsy Values:
0
empty strings '' ""
null
undefined
NaN
*/

// Anything else is true

let wordCount = 2;

if (wordCount) {
  console.log("Great! You've started your work!");
} else {
  console.log('Better get to work!');
}


let favoritePhrase = '';

if (favoritePhrase) {
  console.log("This string doesn't seem to be empty.");
} else {
  console.log('This string is definitely empty.');
}
