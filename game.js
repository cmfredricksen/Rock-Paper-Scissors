
// function getRandomInt(max) {
//     return Math.floor(Math.random() * Math.floor(max));
// }

// let choice = getRandomInt(3);
// console.log(choice);


function computerPlay() {
    
    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    let choice = getRandomInt(3);

    
    if (choice === 0) {
        return 'rock';
    } else if (choice === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

console.log(computerPlay());