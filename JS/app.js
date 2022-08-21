function getInputValue(id) {
    const input = document.getElementById(id);
    const inputValue = parseFloat(input.value);
    return inputValue;
}

function getTextValue(id) {
    const text = document.getElementById(id)
    const textValue = parseFloat(text.innerText)
    return textValue;
}

// Calculate button ---------->

document.getElementById('calculate-btn').addEventListener('click', function () {
    const incomeValue = getInputValue('income-input');
    const foodValue = getInputValue('food-input');
    const rentValue = getInputValue('rent-input');
    const clothesValue = getInputValue('clothes-input');
    const totalExpenses = foodValue + rentValue + clothesValue;
    if (incomeValue >= 0 && foodValue >= 0 && rentValue >= 0 && clothesValue >= 0 && incomeValue > totalExpenses) {
        const expenses = document.getElementById('total-expenses');
        expenses.innerText = totalExpenses;
        const balance = document.getElementById('balance');
        const newBalance = incomeValue - totalExpenses;
        balance.innerText = newBalance;
    }
    else if (incomeValue < totalExpenses) {
        alert('Please sweetheart, Income can not be less than expenses!!')
    }
    else {
        alert('Please sweetheart, input a positive number!!')
    }
})

// Saving button ---------->

document.getElementById('save-btn').addEventListener('click', function () {
    const savingValue = getInputValue('save-input');
    const incomeValue = getInputValue('income-input')
    const savingAmount = incomeValue / 100 * savingValue;
    const balanceValue = getTextValue('balance');
    if (savingValue > 0 && savingAmount < balanceValue) {
        const saving = document.getElementById('save-amount');
        saving.innerText = savingAmount;
        const remainingBalance = balanceValue - savingAmount;
        const remaining = document.getElementById('remaining-balance')
        remaining.innerText = remainingBalance;
    }
    else if (savingValue < 0) {
        alert('Please sweetheart, input a positive number!!')
    }
    else {
        alert('Sry Dear! Your Savings can not be greater than your current balance')
    }

})