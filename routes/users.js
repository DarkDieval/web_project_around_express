const router = require('express').Router();
const fs = require('fs');
const path = require('path');

const usersPath = path.join(__dirname, '../data/users.json');

router.get('/', (req, res) => {
  fs.readFile(usersPath, 'utf8', (err, data) => {
    if (err) {
      return res
        .status(500)
        .json({ message: 'An error has occurred on the server' });
    }
    return res.status(200).json(JSON.parse(data));
  });
});

router.get('/:id', (req, res) => {
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

module.exports = router;
