const express = require('express');
const app = express();
const port = 3000;



// Middleware to parse JSON request bodies
app.use(express.json());


// Route to handle GET requests to the root URL
app.get('/', (req, res) => {
  res.send('This is the root route.');
});

// Route to handle GET requests to /about
app.get('/about', (req, res) => {
  res.send('This is the About page.');
});

// Route to handle POST requests to /submit
app.post('/submit', (req, res) => {
  const data = req.body;
  // Process the data from the POST request
  res.json({ message: 'Form submitted successfully', data });
});
// Route to handle dynamic content with route parameters
app.get('/user/:id', (req, res) => {
  const userId = req.params.id;
  res.send(`User Profile Page for user ${userId}`);
});


// PUT route
app.put('/update/:id', (req, res) => {
  const userId = req.params.id;
  const newData = req.body;
  // Here, you can update data for the specified user ID
  res.json({ message: `User ${userId} updated successfully`, data: newData });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
