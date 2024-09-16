const drawItem = (name, value) => {
    return `
        <div class="transaction-item">
            <span>${name}</span>
            ${costValue(value)}
        </div>
    `;
}

const setTransactionItems = (list) => {
    const itemList = list.map((item) => {
        return drawItem(item.name, item.value);
    });
    // Set items
    const listPanel = document.getElementById("transaction-list");
    listPanel.innerHTML = itemList.join('');
}

const costValue = (value) => {
    if (value < 0) {
        return `
            <div class="badget">
                <span>${setSymbol(value)}</span>
                <div>
                    ${calculatePercentage(value).toFixed(0)}%
                </div>
            </div>
        `;
    }
    return `<span>${setSymbol(value)}</span>`;
}