/**
 * Methods
 */

const loadTransaction = () => {
    const panel = document.getElementById("transaction-panel");

    // Clean panel
    panel.textContent = ''; 

    // Title
    const transactionTitle = document.createElement('div');
    transactionTitle.classList.add('transaction-title');

    // Icon
    const icon = document.createElement('div');
    icon.classList.add('icon');
    icon.textContent = '+';

    // TItle
    const title = document.createElement('span');
    title.textContent = 'Transacción';

    // Icon and title in panel
    transactionTitle.appendChild(icon);
    transactionTitle.appendChild(title);

    // Transaction container
    const transactionContainer = document.createElement('div');
    transactionContainer.id = 'transaction-container';

    // Select and options
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

    // Include options
    transactionTypeSelect.appendChild(defaultOption);
    transactionTypeSelect.appendChild(incomeOption);
    transactionTypeSelect.appendChild(expenseOption);

    // Validation message
    const transactionTypeMessage = document.createElement('span');
    transactionTypeMessage.id = 'transaction-type-message';
    transactionTypeMessage.classList.add('alert');

    // Description input
    const descriptionInput = document.createElement('input');
    descriptionInput.type = 'text';
    descriptionInput.classList.add('input-form');
    descriptionInput.id = 'description';
    descriptionInput.placeholder = 'Descripción';

    // Description input warning message
    const descriptionMessage = document.createElement('span');
    descriptionMessage.id = 'description-message';
    descriptionMessage.classList.add('alert');

    // Amount input
    const amountInput = document.createElement('input');
    amountInput.type = 'number';
    amountInput.classList.add('input-form');
    amountInput.id = 'amount';
    amountInput.placeholder = 'Monto';

    // Amount input alert
    const amountMessage = document.createElement('span');
    amountMessage.id = 'amount-message';
    amountMessage.classList.add('alert');

    // Send button
    const submitButton = document.createElement('button');
    submitButton.id = 'submit';
    submitButton.textContent = 'Agregar';
    submitButton.addEventListener('click', submit);

    transactionContainer.appendChild(transactionTypeSelect);
    transactionContainer.appendChild(transactionTypeMessage);
    transactionContainer.appendChild(descriptionInput);
    transactionContainer.appendChild(descriptionMessage);
    transactionContainer.appendChild(amountInput);
    transactionContainer.appendChild(amountMessage);
    transactionContainer.appendChild(submitButton);

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

    // Warnings
    const amountMessage = document.getElementById("amount-message");
    const descriptionMessage = document.getElementById("description-message");
    const transactionMessage = document.getElementById("transaction-type-message");

    // Fields
    const amount = document.getElementById("amount");
    const description = document.getElementById("description");
    const transaction = document.getElementById("transaction-type-id");

    const number = Number(amount.value);
    const currentTransactionOption = transaction.options[transaction.selectedIndex].value;

    // Validations
    if (!description.value.trim()) {
        description.classList.add('error-input');
        descriptionMessage.textContent = "El campo es requerido";
        descriptionValid = false;
    }

    if (number <= 0 || isNaN(number)) {
        amount.classList.add('error-input');
        amountMessage.textContent = isNaN(number) ? "El valor ingresado no es un número" : "El valor debe ser mayor a 0";
        amountValid = false;
    }

    if (currentTransactionOption === "0") {
        transaction.classList.add('error-input');
        transactionMessage.textContent = "El valor es requerido";
        transactionValid = false;
    }

    if (currentTransactionOption === "2" && totalIncomes === 0) {
        transaction.classList.add('error-input');
        transactionMessage.textContent = "No puede registrar gastos sin ingresos";
        transactionValid = false;
    }

    // Clean warnings
    if (amountValid) {
        amountMessage.textContent = "";
        amount.classList.remove('error-input');
    }

    if (descriptionValid) {
        description.classList.remove('error-input');
        descriptionMessage.textContent = "";
    }

    if (transactionValid) {
        transactionMessage.textContent = "";
        transaction.classList.remove('error-input');
    }

    return descriptionValid && amountValid && transactionValid;
};
