// Global value
let mode = true;
let oldMode = true;

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
    incomeButton.addEventListener('click', () => changeMode(true));

    const expenseButton = document.createElement('button');
    expenseButton.textContent = 'Egresos';
    expenseButton.addEventListener('click', () => changeMode(false));


    // Div animation
    const animation = document.createElement('div');
    animation.classList.add('slide');

    // If use don't move transaction
    if (oldMode === mode) {
        console.log("No se ha cambiado")
        // For incomes position
        if (mode) {
            animation.classList.add('animation-slide')
        } else {
            animation.classList.add('animation-slide-moved')
        }
        // Include buttons and animation in panel
        buttonPanel.appendChild(animation);
        buttonPanel.appendChild(incomeButton);
        buttonPanel.appendChild(expenseButton);

        // Set new mode
        oldMode = mode;
        return;
    }
    // Include buttons and animation in panel
    buttonPanel.appendChild(animation);
    buttonPanel.appendChild(incomeButton);
    buttonPanel.appendChild(expenseButton);
    if (mode) {
        console.log("Si se cambió 1")
        requestAnimationFrame(() => {
            animation.classList.add('animation-slide-moved');

        });
        setTimeout(() => {
            animation.classList.toggle('inactive');
        }, 100)
    } else {
        console.log("Si se cambió 2")
        requestAnimationFrame(() => {
            animation.classList.add('animation-slide');
            animation.classList.toggle('active');
        });
    }
    // Set new mode
    oldMode = mode;

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