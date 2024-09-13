let mode = true;

const historyHtml = `
<div id="tab-panel">
</div>
<!-- Transactions -->
<div id="transaction-list">

</div>
`;

/**
 * Methods
 */
const loadHistory = () => {
    const panel = document.getElementById("history-panel");
    panel.innerHTML = historyHtml;
    loadButton();
}

const loadButton = () => {
    const buttonPanel = document.getElementById("tab-panel");
    buttonPanel.innerHTML = `
        <button class="${mode ? 'active' : ''}" onclick="changeMode(true)">Ingresos</button>
        <button class="${!mode ? 'active' : ''}" onclick="changeMode(false)">Egresos</button>
    `
}


const changeMode = (value) => {
    mode = value;
    loadButton();
}