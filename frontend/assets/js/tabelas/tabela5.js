export const generateConsolidatedReport = (data) => {
    const reportContainer = document.getElementById('consolidated-report');
    reportContainer.innerHTML = '';

    const table = document.createElement('table');
    table.innerHTML = `
        <thead>
            <tr>
                <th>User Name</th>
                <th>Product Name</th>
                <th>Quantity</th>
                <th>Purchase Date</th>
                <th>Final Value</th>
                <th>Payment Method</th>
                <th>Status</th>
            </tr>
        </thead>
        <tbody>
            ${data.map(item => `
                <tr>
                    <td>${item.userName}</td>
                    <td>${item.productName}</td>
                    <td>${item.quantity}</td>
                    <td>${item.purchaseDate}</td>
                    <td>${item.finalValue}</td>
                    <td>${item.paymentMethod}</td>
                    <td>${item.status}</td>
                </tr>
            `).join('')}
        </tbody>
    `;

    reportContainer.appendChild(table);
};