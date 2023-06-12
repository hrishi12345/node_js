const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (req, res) => {
  res.sendFile('group-chat.html', { root: path.join(__dirname, '../views') });
});

router.post('/', (req, res) => {
  console.log(req.body);
  res.redirect('/');
});

module.exports = router;
