

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

const loadDashboard = (totalBalance, totalIncomes, totalExpenses) => {
    const panel = document.getElementById("dashboard");
    const currentDate = new Date();
    // Get month and year individually
    const month = (new Intl.DateTimeFormat('es-ES', { month: 'long' }).format(currentDate));
    const capitalizedMonth = month.charAt(0).toUpperCase() + month.slice(1);

    // Get percentage
    const percentage = calculatePercentage(totalExpenses);
    
    panel.innerHTML = `
        <h6 class="title-date">
            Presupuesto de ${capitalizedMonth} ${currentDate.getFullYear()}
        </h6>
        <span class="total-balance">
            ${setSymbol(totalBalance)}
        </span>
        <div class="total-incomes general-results-container">
            <span>Ingresos:</span>
            <span class="total-incomes-value">
                ${setSymbol(totalIncomes)}
            </span>
        </div>
        <div class="total-expenses general-results-container">
            <span>Egresos:</span>
            <span class="total-expenses-value">
                ${setSymbol(totalExpenses)}
            </span>
        </div>
        <div class="percentage-container">
            <span>Porcentaje de gastos:</span>
            <div class="percentage-chip">
                <span>${percentage ? percentage.toFixed(0) : '0'}%</span>
            </div>
        </div>
    `;;
}
