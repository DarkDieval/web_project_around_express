const router = require('express').Router();
const fs = require('fs');
const path = require('path');

const usersPath = path.join(__dirname, '../data/users.json');
const cardsPath = path.join(__dirname, '../data/cards.json');

router.get('/', (req, res) => {
  res.send('Bienvenido a la API de Around the US');
});

router.get('/users', (req, res) => {
  fs.readFile(usersPath, 'utf8', (err, data) => {
    if (err) {
      return res
        .status(500)
        .json({ message: 'An error has occurred on the server' });
    }
    return res.status(200).json(JSON.parse(data));
  });
});

router.get('/cards', (req, res) => {
  fs.readFile(cardsPath, 'utf8', (err, data) => {
    if (err) {
      return res
        .status(500)
        .json({ message: 'An error has occurred on the server' });
    }
    return res.status(200).json(JSON.parse(data));
  });
});

router.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  fs.readFile(usersPath, 'utf8', (err, data) => {
    if (err) {
      return res
        .status(500)
        .json({ message: 'An error has occurred on the server' });
    }
    const users = JSON.parse(data);
    const user = users.find((u) => u._id === userId);
    if (!user) {
      return res.status(404).json({ message: 'User ID not found' });
    }
    return res.status(200).json(user);
  });
});

router.use((req, res) => {
  res.status(404).json({ message: 'Requested resource not found' });
});

module.exports = router;
