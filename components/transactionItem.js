const drawItem = (name, value) => {
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
    itemDiv.appendChild(valueContainer);

    return itemDiv;
};

const setTransactionItems = (list) => {
    const listPanel = document.getElementById("transaction-list");

    // Clean container
    listPanel.textContent = '';

    // Include item
    list.forEach((item) => {
        const itemElement = drawItem(item.name, item.value);
        listPanel.appendChild(itemElement);
    });
}