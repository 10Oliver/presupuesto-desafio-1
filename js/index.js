// Main values
let transactionList = [
    {
        name: "Holis",
        value: "+450"
    }
];

let totalBalance = 800;
let totalIncomes = 10;
let totalExpenses = 300;

/**
 * Methods
 */


// Events
document.addEventListener('DOMContentLoaded', () => {
    loadDashboard(totalBalance, totalIncomes, totalExpenses);
    loadHistory();
    loadTransaction();
    setTransactionItems(transactionList);
})