import Chart from 'chart.js/auto';

export function renderUsersAgeChart(userData) {
    const ctx = document.getElementById('usersAgeChart').getContext('2d');
    
    const labels = userData.map(user => user.name);
    const ages = userData.map(user => user.age);

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Users vs Ages',
                data: ages,
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