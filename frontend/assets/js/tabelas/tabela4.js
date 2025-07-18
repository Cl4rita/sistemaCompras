export const generateCriticalStockReport = (products) => {
    const criticalStockProducts = products.filter(product => product.stock < 10);
    
    const reportTable = document.createElement('table');
    reportTable.innerHTML = `
        <thead>
            <tr>
                <th>Title</th>
                <th>Stock</th>
                <th>Category</th>
            </tr>
        </thead>
        <tbody>
            ${criticalStockProducts.map(product => `
                <tr>
                    <td>${product.title}</td>
                    <td>${product.stock}</td>
                    <td>${product.category}</td>
                </tr>
            `).join('')}
        </tbody>
    `;

    document.body.appendChild(reportTable);
};