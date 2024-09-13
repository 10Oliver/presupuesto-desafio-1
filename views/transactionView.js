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
    const transactionType = document.getElementById("transaction-type-id").options[document.getElementById("transaction-type-id").selectedIndex];
    const amount = document.getElementById("amount");
    const description = document.getElementById("description");
    // Validations
    if (!showAlerts()) {
        return;
    }
    registerNewTransaction(transactionType.value, amount.value, description.value);
    // Clean
    document.getElementById("transaction-type-id").selectedIndex = 0;
    amount.value = "";
    description.value = "";
}

const showAlerts = () => {
    let valid = true;
    const number = Number(document.getElementById("amount").value);
    const message = document.getElementById("amount-message");
    const descriptionMessage = document.getElementById("description-message");
    if (["", null].includes(document.getElementById("description").value)) {
        descriptionMessage.innerHTML = "El campo es requerido";
        valid = false;
    }

    if (number < 0 || number === 0) {
        message.innerHTML = "El valor debe ser mayor a 0";
        valid = false;
    }

    if (isNaN(number)) {
        message.innerHTML = "El valor ingresado no es un número";
        valid = false;
    }

    if (valid) {
        descriptionMessage.innerHTML = "";
        message.innerHTML = "";
    }
    
    return valid;
}