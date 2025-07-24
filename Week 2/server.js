const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;
// Middleware to parse JSON bodies (for POST requests)
app.use(express.json());
// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));
// In-memory array to store quotes
let quotes = [
"The best way to predict the future is to invent it.",
"Life is 10% what happens to us and 90% how we react to it.",
"The only limit to our realization of tomorrow is our doubts of today.",
"Do not wait to strike till the iron is hot; but make it hot by striking."
];
// GET endpoint to retrieve a random quote
// Usage example: http://localhost:3000/api/quote
app.get('/api/quote', (req, res) => {
const randomIndex = Math.floor(Math.random() * quotes.length);
res.json({ quote: quotes[randomIndex] });
});
// Optional: POST endpoint to add a new quote
app.get('/health', (req, res) => {
  res.send('Server is healthy!');
});
// Endpoint to calculate the square of a number
app.get('/square', (req, res) => {
const num = parseFloat(req.query.num);
const square = num * num;
res.send(`The square of ${num} is: ${square}`);
});
// Additonal endpoint to add two numbers
app.get('/add', (req, res) => {
  const a = parseFloat(req.query.a);
  const b = parseFloat(req.query.b);
  if (isNaN(a) || isNaN(b)) {
    return res.status(400).send('Invalid input. Please provide two numbers using ?a=number&b=number');
  }
  const add = a + b;
  res.send(`The add of ${a} and ${b} is: ${add}`);
});
// Start the server
app.listen(PORT, () => {
    console.log('Server is running at  http://localhost:3000');
});
