const express = require('express');
const cors = require('cors');

const booksRoutes = require('./routes/booksRoutes.js');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/books', booksRoutes);

app.listen(5000, () => console.log("server is running"));