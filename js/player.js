// Getting Player List
const buttons = document.getElementsByClassName('select-button');
for (const button of buttons) {
    button.addEventListener('click', function (event) {
        const playerList = document.getElementById('player-list');
        const playerNumber = playerList.getElementsByTagName('li').length;
        if (playerNumber >= 5) {
            alert('Maximum five players can be selected');
        }
        else {
            const playerName = event.target.parentNode.parentNode.childNodes[1].innerText;
            const newElement = document.createElement('li');
            newElement.innerText = playerName;
            playerList.appendChild(newElement);
            event.target.setAttribute('disabled', true);
        }
    })
}






document.getElementById('calculate').addEventListener('click', function () {
    const playerList = document.getElementById('player-list');
    const playerNumber = playerList.getElementsByTagName('li').length;

    const perPlayerExpense = getValueOfFieldById('player-field');

    const newPlayerExpenses = playerNumber * perPlayerExpense;


    const PlayerExpensesElement = document.getElementById('player-expenses');
    PlayerExpensesElement.innerText = newPlayerExpenses;
})


document.getElementById('calculate-total').addEventListener('click', function () {
    const PlayerExpensesElement = document.getElementById('player-expenses');
    const newPlayerExpensesString = PlayerExpensesElement.innerText;
    const newPlayerExpenses = parseFloat(newPlayerExpensesString);

    const newmManagerExpenses = getValueOfFieldById('manager-field');
    const newCoachExpenses = getValueOfFieldById('coach-field');

    const calculateTotal = newPlayerExpenses + newmManagerExpenses + newCoachExpenses;

    const totalExpensesElement = document.getElementById('total');
    totalExpensesElement.innerText = calculateTotal;
})
