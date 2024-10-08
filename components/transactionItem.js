const drawItem = (name, value, index) => {
    // Container
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('transaction-item');

    // Item name
    const nameSpan = document.createElement('span');
    nameSpan.textContent = name;
    itemDiv.appendChild(nameSpan);

    // Value
    const valueContainer = document.createElement('div');
    // Verify for badget with percentage
    if (value < 0) {
        const badget = document.createElement('div');
        badget.classList.add('badget');

        const valueSpan = document.createElement('span');
        valueSpan.textContent = setSymbol(value);

        const percentageBadget = document.createElement('div');
        percentageBadget.textContent = `${calculatePercentage(value).toFixed(0)}%`;

        // Set values
        badget.appendChild(valueSpan);
        badget.appendChild(percentageBadget);
        valueContainer.appendChild(badget)
    } else {
        const valueCost = document.createElement('span');
        valueCost.textContent = setSymbol(value);
        valueContainer.appendChild(valueCost);
    }

    // Delete button
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-button');

    // Icons
    const deleteIcon = document.createElement('span');
    deleteIcon.classList.add('mdi');
    deleteIcon.classList.add('mdi-delete');
    deleteIcon.addEventListener('click', () => deleteTransaction(value, index));

    deleteButton.appendChild(deleteIcon);

    valueContainer.appendChild(deleteButton);
    itemDiv.appendChild(valueContainer);

    return itemDiv;
};

const setTransactionItems = (list) => {
    const listPanel = document.getElementById("transaction-list");

    // Clean container
    listPanel.textContent = '';

    // Include item
    list.forEach((item, index) => {
        const itemElement = drawItem(item.name, item.value, index);
        listPanel.appendChild(itemElement);
        requestAnimationFrame(() => {
            itemElement.classList.add('transaction-item-active');
        });
    });
}

const deleteTransaction = (value, position) => {
    const absoluteValue = Number(Math.abs(value));
    // Delete from expenses
    if (value < 0) {
        expensesTransactionList.splice(position, 1);
        totalExpenses += absoluteValue;
        totalBalance += absoluteValue;
        setTransactionItems(expensesTransactionList);
    }
    if (value > 0) {
        incomeTransactionList.splice(position, 1);
        totalIncomes -= absoluteValue;
        totalBalance -= absoluteValue;
        setTransactionItems(incomeTransactionList);
    }
    loadDashboard();
}