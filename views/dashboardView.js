

/**
 * Methods
 */

const setSymbol = (value) => {
    let symbol = '';
    if (value > 0) {
        symbol = '+';
    } 
    if (value < 0) {
        symbol = '-';
    }
    return `${symbol} ${Math.abs(value).toFixed(2)}`;
}

const loadDashboard = () => {
    const panel = document.getElementById("dashboard");
    const currentDate = new Date();
    // Get month and year individually
    const month = (new Intl.DateTimeFormat('es-ES', { month: 'long' }).format(currentDate));
    const capitalizedMonth = month.charAt(0).toUpperCase() + month.slice(1);

    // Get percentage
    const percentage = calculatePercentage(totalExpenses);

    // Clean panel
    panel.textContent = ''; 

    // Title
    const title = document.createElement('h6');
    title.classList.add('title-date');
    title.textContent = `Presupuesto de ${capitalizedMonth} ${currentDate.getFullYear()}`;

    // Total balance
    const totalBalanceElement = document.createElement('span');
    totalBalanceElement.classList.add('total-balance');
    totalBalanceElement.textContent = setSymbol(totalBalance);

    // Incomes sections
    const totalIncomesContainer = document.createElement('div');
    totalIncomesContainer.classList.add('total-incomes', 'general-results-container');

    // Label
    const incomesLabel = document.createElement('span');
    incomesLabel.textContent = 'Ingresos:';
    // Value
    const totalIncomesValue = document.createElement('span');
    totalIncomesValue.classList.add('total-incomes-value');
    totalIncomesValue.textContent = setSymbol(totalIncomes);

    // Include label and value into income section
    totalIncomesContainer.appendChild(incomesLabel);
    totalIncomesContainer.appendChild(totalIncomesValue);

    // Expenses section
    const totalExpensesContainer = document.createElement('div');
    totalExpensesContainer.classList.add('total-expenses', 'general-results-container');

    // Label
    const expensesLabel = document.createElement('span');
    expensesLabel.textContent = 'Egresos:';

    // Value
    const totalExpensesValue = document.createElement('span');
    totalExpensesValue.classList.add('total-expenses-value');
    totalExpensesValue.textContent = setSymbol(totalExpenses);

    // Set label and value into expenses section
    totalExpensesContainer.appendChild(expensesLabel);
    totalExpensesContainer.appendChild(totalExpensesValue);

    // Percentage section
    const percentageContainer = document.createElement('div');
    percentageContainer.classList.add('percentage-container');

    // Label
    const percentageLabel = document.createElement('span');
    percentageLabel.textContent = 'Porcentaje de gastos:';

    // Chip
    const percentageChip = document.createElement('div');
    percentageChip.classList.add('percentage-chip');

    //Value
    const percentageValue = document.createElement('span');
    percentageValue.textContent = `${percentage ? percentage.toFixed(0) : '0'}%`;

    // Label, chip and value into container
    percentageChip.appendChild(percentageValue);
    percentageContainer.appendChild(percentageLabel);
    percentageContainer.appendChild(percentageChip);

    // Show alert
    if (Math.abs(totalExpenses) >= totalIncomes && totalIncomes !== 0) {
        const warningIcon = document.createElement('div');
        warningIcon.classList.add('warning-icon');
        warningIcon.textContent = '!';
        percentageContainer.appendChild(warningIcon);
    }

    // Include all childs into panel
    panel.appendChild(title);
    panel.appendChild(totalBalanceElement);
    panel.appendChild(totalIncomesContainer);
    panel.appendChild(totalExpensesContainer);
    panel.appendChild(percentageContainer);
}
