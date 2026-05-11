const express = require('express');
const app = express();
const connectDB = require('./data_base');
const dotenv = require('dotenv');
const product_route = require('./routes/product_route');


dotenv.config();
const PORT = process.env.PORT;

// Middleware
app.use(express.json());

// Connect DB
connectDB();
app.use('/api', product_route);


app.get('/', (req, res) => {
  res.send('Hello, World! Server is on port 3000 🚀');
});


app.listen(PORT, () => {
  console.log(`product app is run  on port NO. :${PORT}`);
});
