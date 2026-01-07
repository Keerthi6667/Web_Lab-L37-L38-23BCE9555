// Select elements
const userForm = document.getElementById('userForm');
const usersTableBody = document.querySelector('#usersTable tbody');
const clearAllBtn = document.getElementById('clearAll');

// Load users from localStorage
let users = JSON.parse(localStorage.getItem('users')) || [];

// Function to display users in the table
function displayUsers() {
    usersTableBody.innerHTML = '';
    users.forEach((user, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.mobile}</td>
            <td>${user.password}</td>
            <td><button class="deleteBtn" onclick="deleteUser(${index})">Delete</button></td>
        `;
        usersTableBody.appendChild(row);
    });
}

// Function to delete a user
function deleteUser(index) {
    users.splice(index, 1);
    localStorage.setItem('users', JSON.stringify(users));
    displayUsers();
}

// Form submit event
userForm.addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const mobile = document.getElementById('mobile').value.trim();
    const password = document.getElementById('password').value.trim();

    // Validations
    if (!name || !email || !mobile || !password) {
        alert('All fields are mandatory!');
        return;
    }

    if (!/^\d{10}$/.test(mobile)) {
        alert('Mobile number must be 10 digits!');
        return;
    }

    if (password.length < 6) {
        alert('Password must be at least 6 characters!');
        return;
    }

    if (users.some(user => user.email === email)) {
        alert('Email already registered!');
        return;
    }

    // Add user to array and localStorage
    const user = { name, email, mobile, password };
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));

    // Reset form
    userForm.reset();

    // Refresh table
    displayUsers();
});

// Clear all users
clearAllBtn.addEventListener('click', () => {
    if (confirm('Are you sure you want to clear all users?')) {
        users = [];
        localStorage.removeItem('users');
        displayUsers();
    }
});

// Initial display
displayUsers();
