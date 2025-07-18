const productsStockChart = require('./charts/productsStockChart');
const usersAgeChart = require('./charts/usersAgeChart');
const report1 = require('./reports/tabela1');
const report2 = require('./reports/report2');
const report3 = require('./reports/report3');
const report4 = require('./reports/report4');
const report5 = require('./reports/report5');

document.addEventListener('DOMContentLoaded', () => {
    // Initialize charts
    productsStockChart();
    usersAgeChart();

    // Generate reports
    report1();
    report2();
    report3();
    report4();
    report5();
});