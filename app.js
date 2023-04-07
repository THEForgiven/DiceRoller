const rollButton = document.getElementById('rollButton');
const clearButton = document.getElementById('clearButton');
const result = document.getElementById('result');
const logWindow = document.getElementById('logWindow');

function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

function addToLog(message) {
    logWindow.innerHTML += message + '<br>';
}

rollButton.addEventListener('click', () => {
    const dice1 = rollDice();
    const dice2 = rollDice();
    const message = `You rolled a ${dice1} and a ${dice2}.`;
    result.textContent = message;
    addToLog(message);
});

clearButton.addEventListener('click', () => {
    logWindow.innerHTML = '';
});
