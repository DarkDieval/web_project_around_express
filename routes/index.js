const router = require('express').Router();
const usersRouter = require('./users');
const cardsRouter = require('./cards');

// Ruta de bienvenida (raíz)
router.get('/', (req, res) => {
  res.send('Bienvenido a la API de Around the US');
});

router.use('/users', usersRouter);

router.use('/cards', cardsRouter);

router.use((req, res) => {
  res.status(404).json({ message: 'Requested resource not found' });
});

module.exports = router;
