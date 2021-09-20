// Code your solutions in this file
let names = ['Lisa', 'Kaitlin', 'Jan']
let surprise = 'surprise';

function writeCards(names, surprise) {
    let array = [];
    for(let i = 0; i < names.length; i++){
        let message = `Thank you, ${names[i]}, for the wonderful ${surprise} gift!`
        array.push(message)
    }
    return array
}


function countDown() {
    let countdown = 10;
    while (countdown >= 0) {
        console.log(countdown--);
    }
}

// let countup = 0;
// while (countup < 10) {
//   console.log(countup++);
// }