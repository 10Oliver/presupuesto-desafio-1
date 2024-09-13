const formHtml = `
<div class="transaction-title">
    <div class="icon">+</div>
    <span>Transacción</span>
</div>
<div id="transaction-container">
    <select id="transaction-type-id" class="input-form" placeholder="Ingreso | Egreso">
        <option value="1">Ingreso</option>
        <option value="2">Egreso</option>
    </select>
    <input type="text" class="input-form" id="description" placeholder="Descripción">
    <input type="text" class="input-form" id="amount" placeholder="Monto">
    <button id="submit" onclick="submit()">Agregar</button>
</div>
`;

/**
 * Methods
 */
const loadTransaction = () => {
    const panel = document.getElementById("transaction-panel");
    panel.innerHTML = formHtml;
}


/**
 * Events
 */

const submit = () => {
    // Check for type
    const transactionType = document.getElementById("transaction-type-id").options[document.getElementById("transaction-type-id").selectedIndex];
    const amount = document.getElementById("amount");
    const description = document.getElementById("description");
    registerNewTransaction(transactionType.value, amount.value, description.value);
    // Clean
    document.getElementById("transaction-type-id").selectedIndex = 0;
    amount.value = "";
    description.value = "";
}