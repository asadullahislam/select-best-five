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

    const playerField = document.getElementById('player-field');
    const perPlayerExpenseString = playerField.value;
    const perPlayerExpense = parseFloat(perPlayerExpenseString);

    const newPlayerExpenses = playerNumber * perPlayerExpense;


    const PlayerExpensesElement = document.getElementById('player-expenses');
    PlayerExpensesElement.innerText = newPlayerExpenses;
})


document.getElementById('calculate-total').addEventListener('click', function () {
    const PlayerExpensesElement = document.getElementById('player-expenses');
    const newPlayerExpensesString = PlayerExpensesElement.innerText;
    const newPlayerExpenses = parseFloat(newPlayerExpensesString);


    const managerField = document.getElementById('manager-field');
    const newmManagerExpensesString = managerField.value;
    const newmManagerExpenses = parseFloat(newmManagerExpensesString);



    const coachField = document.getElementById('coach-field');
    const newCoachExpensesString = coachField.value;
    const newCoachExpenses = parseFloat(newCoachExpensesString);


    const calculateTotal = newPlayerExpenses + newmManagerExpenses + newCoachExpenses;

    const totalExpensesElement = document.getElementById('total');
    totalExpensesElement.innerText = calculateTotal;
})
