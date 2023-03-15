// Code your solutions in this file

const names = ["Guadalupe", "Ollie", "Aki"];
const messages = [];

function writeCards(names, value) {
    for (let i = 0; i < names.length; i ++) {
        let message = `Thank you, ${names[i]}, for the wonderful ${value} gift!`;
        messages.push(message);
    }
    return messages; 
}

function countDown(integer) {
    while (integer >= 0) {
        console.log(integer);
        integer --;
    }
}
