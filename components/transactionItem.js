const drawItem = (name, value) => {
    return `
        <div class="transaction-item">
            <span>${name}</span>
            <span>${value}</span>
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