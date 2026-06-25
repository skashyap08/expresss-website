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