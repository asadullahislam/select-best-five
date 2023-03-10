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
    if (isNaN(perPlayerExpense) || perPlayerExpense === 0) {
        alert('Please Enter Valid Per Player Ammount');
    }
    else {
        const newPlayerExpenses = playerNumber * perPlayerExpense;
        setValueInElementById('player-expenses', newPlayerExpenses);
    }
})

document.getElementById('calculate-total').addEventListener('click', function () {
    const newPlayerExpenses = getValueOfElementById('player-expenses');
    const newmManagerExpenses = getValueOfFieldById('manager-field');
    const newCoachExpenses = getValueOfFieldById('coach-field');
    if (isNaN(newmManagerExpenses) || isNaN(newCoachExpenses)) {
        alert('Please Enter Valid Ammount');
    }
    else {
        const calculateTotal = newPlayerExpenses + newmManagerExpenses + newCoachExpenses;
        setValueInElementById('total', calculateTotal);
    }
})
