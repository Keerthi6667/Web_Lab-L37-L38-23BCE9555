// Import express
const express = require('express');

// Create app
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Sample data (users)
let users = [
    { id: 1, name: "Keerthi" },
    { id: 2, name: "Ravi" }
];

// 1. GET - Get all users
app.get('/users', (req, res) => {
    res.json(users);
});

// 2. GET - Get single user (Route parameter)
app.get('/users/:id', (req, res) => {
    const user = users.find(u => u.id == req.params.id);
    if (!user) return res.send("User not found");
    res.json(user);
});

// 3. POST - Add new user
app.post('/users', (req, res) => {
    const newUser = {
        id: users.length + 1,
        name: req.body.name
    };
    users.push(newUser);
    res.json(newUser);
});

// 4. PUT - Update user
app.put('/users/:id', (req, res) => {
    const user = users.find(u => u.id == req.params.id);
    if (!user) return res.send("User not found");

    user.name = req.body.name;
    res.json(user);
});

// 5. DELETE - Remove user
app.delete('/users/:id', (req, res) => {
    users = users.filter(u => u.id != req.params.id);
    res.send("User deleted");
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});