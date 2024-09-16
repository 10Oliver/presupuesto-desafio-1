/**
 * Methods
 */

const loadTransaction = () => {
    const panel = document.getElementById("transaction-panel");

    // Limpia el contenido actual del panel
    panel.textContent = ''; 

    // Crea el contenedor del título de la transacción
    const transactionTitle = document.createElement('div');
    transactionTitle.classList.add('transaction-title');

    // Crea el icono "+"
    const icon = document.createElement('div');
    icon.classList.add('icon');
    icon.textContent = '+';

    // Crea el título "Transacción"
    const title = document.createElement('span');
    title.textContent = 'Transacción';

    // Agrega el icono y el título al contenedor del título de la transacción
    transactionTitle.appendChild(icon);
    transactionTitle.appendChild(title);

    // Crea el contenedor de la transacción
    const transactionContainer = document.createElement('div');
    transactionContainer.id = 'transaction-container';

    // Crea el select para el tipo de transacción
    const transactionTypeSelect = document.createElement('select');
    transactionTypeSelect.id = 'transaction-type-id';
    transactionTypeSelect.classList.add('input-form');
    transactionTypeSelect.placeholder = 'Ingreso | Egreso';

    const defaultOption = document.createElement('option');
    defaultOption.disabled = true;
    defaultOption.selected = true;
    defaultOption.value = '0';
    defaultOption.textContent = 'Ingreso | Egreso';
    const incomeOption = document.createElement('option');
    incomeOption.value = '1';
    incomeOption.textContent = 'Ingreso';
    const expenseOption = document.createElement('option');
    expenseOption.value = '2';
    expenseOption.textContent = 'Egreso';

    // Agrega las opciones al select
    transactionTypeSelect.appendChild(defaultOption);
    transactionTypeSelect.appendChild(incomeOption);
    transactionTypeSelect.appendChild(expenseOption);

    // Crea el mensaje de alerta para el tipo de transacción
    const transactionTypeMessage = document.createElement('span');
    transactionTypeMessage.id = 'transaction-type-message';
    transactionTypeMessage.classList.add('alert');

    // Crea el input para la descripción
    const descriptionInput = document.createElement('input');
    descriptionInput.type = 'text';
    descriptionInput.classList.add('input-form');
    descriptionInput.id = 'description';
    descriptionInput.placeholder = 'Descripción';

    // Crea el mensaje de alerta para la descripción
    const descriptionMessage = document.createElement('span');
    descriptionMessage.id = 'description-message';
    descriptionMessage.classList.add('alert');

    // Crea el input para el monto
    const amountInput = document.createElement('input');
    amountInput.type = 'number';
    amountInput.classList.add('input-form');
    amountInput.id = 'amount';
    amountInput.placeholder = 'Monto';

    // Crea el mensaje de alerta para el monto
    const amountMessage = document.createElement('span');
    amountMessage.id = 'amount-message';
    amountMessage.classList.add('alert');

    // Crea el botón de enviar
    const submitButton = document.createElement('button');
    submitButton.id = 'submit';
    submitButton.textContent = 'Agregar';
    submitButton.addEventListener('click', submit);

    // Agrega todos los elementos al contenedor de la transacción
    transactionContainer.appendChild(transactionTypeSelect);
    transactionContainer.appendChild(transactionTypeMessage);
    transactionContainer.appendChild(descriptionInput);
    transactionContainer.appendChild(descriptionMessage);
    transactionContainer.appendChild(amountInput);
    transactionContainer.appendChild(amountMessage);
    transactionContainer.appendChild(submitButton);

    // Agrega el título de la transacción y el contenedor de la transacción al panel
    panel.appendChild(transactionTitle);
    panel.appendChild(transactionContainer);
};


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
    
    const currentTransactionOption = transaction.options[transaction.selectedIndex].value;
    
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

    if (currentTransactionOption == 0) {
        transaction.classList.add('error-input');
        transactionMessage.innerHTML = "El valor es requerido";
        transactionValid = false;
    }

    if (currentTransactionOption == 2 && totalIncomes == 0) {
        transaction.classList.add('error-input');
        transactionMessage.innerHTML = "No puede registrar gastos sin ingresos";
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