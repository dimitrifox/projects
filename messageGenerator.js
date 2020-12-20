let firsText = Math.floor(Math.random() * 4);
switch (firsText) {
    case 0:
        firsText = 'I like ';
        // console.log('I like ');
        break;
    case 1:
        firsText = 'I have to ';
        // console.log('I hate ');
        break;
    case 2:
        firsText = 'I used to ';
        // console.log('I have to ');
        break;
    case 3:
        firsText = 'I used to ';
        // console.log('I used to ');
        break;
    default:
        console.log('This is default value...');
        break;
};

let secondText = Math.floor(Math.random() * 4);
switch (secondText) {
    case 0:
        secondText = 'play ';
        // console.log('play ');
        break;
    case 1:
        secondText = 'eat ';
        // console.log('eat ');
        break;
    case 2:
        secondText = 'wash ';
        // console.log('wash ');
        break;
    case 3:
        secondText = 'make ';
        // console.log('make ');
        break;
    default:
        console.log('This is default value...');
        break;
};

let thirdText = Math.floor(Math.random() * 4);
switch (thirdText) {
    case 0:
        thirdText = 'game.'
        // console.log('game.');
        break;
    case 1:
        thirdText = 'dishes.'
        // console.log('dishes.');
        break;
    case 2:
        thirdText = 'homework.'
        // console.log('homework.');
        break;
    case 3:
        thirdText = 'sleep.'
        // console.log('sleep.');
        break;
    default:
        console.log('This is default value...');
        break;
};

console.log(firsText + secondText + thirdText);
