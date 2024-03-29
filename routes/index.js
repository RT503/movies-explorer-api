const router = require('express').Router();
const auth = require('../middlewares/auth');
const users = require('./users');
const movies = require('./movies');

const { login, createUser, signout } = require('../controllers/users');

const NotFoundError = require('../errors/not-found-err');

const { createUserValidation, loginValidation } = require('../middlewares/celebrate');

router.post('/signin', loginValidation, login);
router.post('/signup', createUserValidation, createUser);

router.use(auth);

router.use('/users', users);
router.use('/movies', movies);

router.delete('/signout', signout);

router.use('/', () => {
  throw new NotFoundError('Запрашиваемый ресурс не найден');
});

module.exports = router;
