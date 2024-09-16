// Main values
let incomeTransactionList = [];

let expensesTransactionList = [];

let totalBalance = 0;
let totalIncomes = 0;
let totalExpenses = 0;

/**
 * Methods
 */

const registerNewTransaction = (transactionType, amount, description) => {
    // For incomes
    if (transactionType == 1) {
        totalBalance += Number(amount);
        totalIncomes += Number(amount);
        incomeTransactionList.push({
            name: description,
            value: amount
        });
    }
    // For expenses
    if (transactionType == 2) {
        totalBalance -= Number(amount);
        totalExpenses -= Number(amount);
        expensesTransactionList.push({
            name: description,
            value: 0 - amount
        });
    }
    // Refresh content
    loadDashboard();
    changeMode(mode);
}


const calculatePercentage = (value) => {
    return (Math.abs(value) * 100) / totalIncomes;
}

// Events
document.addEventListener('DOMContentLoaded', () => {
    loadDashboard(totalBalance, totalIncomes, totalExpenses);
    loadHistory();
    loadTransaction();
    setTransactionItems(incomeTransactionList);
})