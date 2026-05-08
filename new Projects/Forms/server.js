import express from "express"
import cors from "cors"
import bodyParser from "body-parser"

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Route to handle form submissions
app.post('/submit', (req, res) => {
  const { username, password } = req.body;
  console.log("Received data:", req.body);

  // Here, you can add validation or save the data to a database
  if (username && password) {
    res.status(200).json({ message: 'Form submitted successfully!', data: req.body });
  } else {
    res.status(400).json({ message: 'All fields are required' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
