const formHtml = `
<div class="transaction-title">
    <div class="icon">+</div>
    <span>Transacción</span>
</div>
<div id="transaction-container">
    <select id="transaction-type-id" class="input-form" placeholder="Ingreso | Egreso">
        <option disabled selected value="0">Ingreso | Egreso</option>
        <option value="1">Ingreso</option>
        <option value="2">Egreso</option>
    </select>
    <span id="transaction-type-message" class="alert"></span>

    <input type="text" class="input-form" id="description" placeholder="Descripción">
    <span id="description-message" class="alert"></span>

    <input type="number" class="input-form" id="amount" placeholder="Monto">
    <span id="amount-message" class="alert"></span>

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
    const transactionType = document.getElementById("transaction-type-id");
    const amount = document.getElementById("amount");
    const description = document.getElementById("description");
    // Validations
    if (!showAlerts()) {
        return;
    }
    registerNewTransaction(transactionType.options[transactionType.selectedIndex].value, amount.value, description.value);
    // Clean
    transactionType.selectedIndex = 0;
    amount.value = "";
    description.value = "";
}

const showAlerts = () => {
    let amountValid = true;
    let descriptionValid = true;
    let transactionValid = true;
    // Messages
    const amountMessage = document.getElementById("amount-message");
    const descriptionMessage = document.getElementById("description-message");
    const transactionMessage = document.getElementById("transaction-type-message");
    // Inputs
    const amount = document.getElementById("amount");
    const description = document.getElementById("description");
    const transaction = document.getElementById("transaction-type-id");

    const number = Number(amount.value);
    
    // Validations
    if (["", null].includes(document.getElementById("description").value)) {
        description.classList.add('error-input');
        descriptionMessage.innerHTML = "El campo es requerido";
        descriptionValid = false;
    }

    if (number < 0 || number === 0) {
        amount.classList.add('error-input');
        amountMessage.innerHTML = "El valor debe ser mayor a 0";
        amountValid = false;
    }

    if (isNaN(number)) {
        amountMessage.innerHTML = "El valor ingresado no es un número";
        amount.classList.add('error-input')
        amountValid = false;
    }

    if (transaction.options[transaction.selectedIndex].value == 0) {
        transaction.classList.add('error-input');
        transactionMessage.innerHTML = "El valor es requerido";
        transactionValid = false;
    }

    // Remove warnings
    if (amountValid) {
        amountMessage.innerHTML = "";
        amount.classList.remove('error-input');
    }
    
    if (descriptionValid) {
        description.classList.remove('error-input');
        descriptionMessage.innerHTML = "";
    }
    
    if (transactionValid) {
        transactionMessage.innerHTML = "";
        transaction.classList.remove('error-input');
    }

    return descriptionValid && amountValid && transactionValid;
}