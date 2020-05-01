const express = require('express');

const app = express();
const port = 8000;

const testimonialsRoutes = require('./routes/testimonials.routes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api', testimonialsRoutes);

app.use(function (req, res, next) {
  res.status(404).json({ message: 'Not found...' })
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))