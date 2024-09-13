const formHtml = `
<div class="transaction-title">
    <div class="icon">+</div>
    <span>Transacción</span>
</div>
<form id="transaction-form">
    <select id="transaction-type-id" class="input-form" placeholder="Ingreso | Egreso">
        <option value="1">Ingreso</option>
        <option value="2">Egreso</option>
    </select>
    <input type="text" class="input-form" id="description" placeholder="Descripción">
    <input type="text" class="input-form" id="amount" placeholder="Monto">
    <button id="submit" type="submit">Agregar</button>
</form>
`;

/**
 * Methods
 */
const loadTransaction = () => {
    const panel = document.getElementById("transaction-panel");
    panel.innerHTML = formHtml;
}
