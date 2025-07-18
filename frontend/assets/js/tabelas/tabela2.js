export const generateProductReport = (products) => {
    const reportTable = document.createElement('table');
    reportTable.innerHTML = `
        <thead>
            <tr>
                <th>Title</th>
                <th>Category</th>
                <th>Original Price</th>
                <th>Applied Discount</th>
                <th>Estimated Final Value</th>
            </tr>
        </thead>
        <tbody>
            ${products.map(product => `
                <tr>
                    <td>${product.title}</td>
                    <td>${product.category}</td>
                    <td>${product.originalPrice}</td>
                    <td>${product.appliedDiscount}</td>
                    <td>${(product.originalPrice - product.appliedDiscount).toFixed(2)}</td>
                </tr>
            `).join('')}
        </tbody>
    `;
    document.body.appendChild(reportTable);
};