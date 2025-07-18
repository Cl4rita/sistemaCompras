import Chart from 'chart.js/auto';

export function renderProductsStockChart(data) {
    const ctx = document.getElementById('productsStockChart').getContext('2d');
    const labels = data.map(item => item.nome);
    const stockQuantities = data.map(item => item.estoque);

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Stock Quantity',
                data: stockQuantities,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

export async function fetchProductsData(startId, endId) {
    const response = await fetch(`/api/produto?startId=${startId}&endId=${endId}`);
    const data = await response.json();
    return data;
}