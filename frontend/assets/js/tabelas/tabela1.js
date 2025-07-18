export const generateUserReport = (users) => {
    const reportTable = document.createElement('table');
    reportTable.innerHTML = `
        <thead>
            <tr>
                <th>Full Name</th>
                <th>Age</th>
                <th>Email</th>
                <th>City</th>
                <th>State</th>
            </tr>
        </thead>
        <tbody>
            ${users.map(user => `
                <tr>
                    <td>${user.fullName}</td>
                    <td>${user.age}</td>
                    <td>${user.email}</td>
                    <td>${user.city}</td>
                    <td>${user.state}</td>
                </tr>
            `).join('')}
        </tbody>
    `;
    document.body.appendChild(reportTable);
};