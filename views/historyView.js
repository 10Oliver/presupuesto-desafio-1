// Global value
let mode = true;

/**
 * Methods
 */
const loadHistory = () => {
    const panel = document.getElementById("history-panel");

    // Clean panel
    panel.textContent = ''; 

    // Container
    const tabPanel = document.createElement('div');
    tabPanel.id = 'tab-panel';

    // Transaction list
    const transactionList = document.createElement('div');
    transactionList.id = 'transaction-list';

    // Set values in panel
    panel.appendChild(tabPanel);
    panel.appendChild(transactionList);

    loadButton();
}


const loadButton = () => {
    const buttonPanel = document.getElementById("tab-panel");

    // Clean panel
    buttonPanel.textContent = ''; 

    /**
     * Buttons section
     */
    const incomeButton = document.createElement('button');
    incomeButton.textContent = 'Ingresos';
    if (mode) {
        incomeButton.classList.add('active');
    }
    incomeButton.addEventListener('click', () => changeMode(true));

    const expenseButton = document.createElement('button');
    expenseButton.textContent = 'Egresos';
    if (!mode) {
        expenseButton.classList.add('active');
    }
    expenseButton.addEventListener('click', () => changeMode(false));

    // Include buttons in panel
    buttonPanel.appendChild(incomeButton);
    buttonPanel.appendChild(expenseButton);
};



const changeMode = (value) => {
    mode = value;
    loadButton();
    if (mode) {
        setTransactionItems(incomeTransactionList);
    } else {
        setTransactionItems(expensesTransactionList);
    }
}