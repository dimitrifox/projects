const firstPart = ['I like ', 'I have to ', 'I used to ', 'I hate '];
let firsRandText = Math.floor(Math.random() * firstPart.length);
let firstText = firstPart[firsRandText];

const secondPart = ['play ', 'eat ', 'wash ', 'make '];
let secondRandText = Math.floor(Math.random() * secondPart.length);
let secondText = secondPart[secondRandText];

const thirdPart = ['game.', 'dishes.', 'homework.', 'sleep.'];
let thirdRandText = Math.floor(Math.random() * thirdPart.length);
let thirdText = thirdPart[thirdRandText];


console.log(firstText + secondText + thirdText);
