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
    // Flag to determine if is necesary re-render items
    let currentTypeRegister = true;
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
        
        currentTypeRegister = false;
    }
    // Refresh content
    loadDashboard();
    changeMode(mode, currentTypeRegister);
}


const calculatePercentage = (value) => {
    if (totalIncomes === 0) {
        return 0;
    }
    return (Math.abs(value) * 100) / totalIncomes;
}

// Events
document.addEventListener('DOMContentLoaded', () => {
    loadDashboard(totalBalance, totalIncomes, totalExpenses);
    loadHistory();
    loadTransaction();
    setTransactionItems(incomeTransactionList);
})