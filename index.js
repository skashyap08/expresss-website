const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;
// Static Files
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'home.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'about.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'contact.html'));
});
// 404 Page
app.use((req, res) => {
    res.status(404).send(`
        <h1 style="text-align:center;margin-top:100px;">
        404 Page Not Found
        </h1>
    `);
});
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});