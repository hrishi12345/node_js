const express = require('express');
const bodyParser = require('body-parser');
const adminRoutes = require('./routes/admin');
const loginRoutes = require('./routes/login');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/admin', adminRoutes);
app.use('/login', loginRoutes); // Use loginRoutes for the "/login" path

app.use('/', (req, res) => {
  res.sendFile('group-chat.html', { root: 'views' });
});

app.use((req, res, next) => {
  res.status(404).send('<h1>Page not found</h1>');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
