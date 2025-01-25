const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Route to perform calculation
app.post('/calculate', (req, res) => {
    const { num1, num2, operator } = req.body;

    let result;
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                return res.status(400).json({ error: 'Division by zero is not allowed.' });
            }
            result = num1 / num2;
            break;
        case '%':
            result=num1 % num2;
            break;
        default:
            return res.status(400).json({ error: 'Invalid operator.' });
    }

    res.json({ result });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});