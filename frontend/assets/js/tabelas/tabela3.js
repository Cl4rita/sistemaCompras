export default function generatePurchaseReport(purchases) {
    const reportTable = document.createElement('table');
    reportTable.innerHTML = `
        <thead>
            <tr>
                <th>ID</th>
                <th>User Name</th>
                <th>Product Name</th>
                <th>Quantity</th>
                <th>Date</th>
                <th>Final Price</th>
            </tr>
        </thead>
        <tbody>
            ${purchases.map(purchase => `
                <tr>
                    <td>${purchase.id}</td>
                    <td>${purchase.userName}</td>
                    <td>${purchase.productName}</td>
                    <td>${purchase.quantity}</td>
                    <td>${new Date(purchase.date).toLocaleDateString()}</td>
                    <td>${purchase.finalPrice.toFixed(2)}</td>
                </tr>
            `).join('')}
        </tbody>
    `;
    document.body.appendChild(reportTable);
}