const router = require('express').Router();
const auth = require('../middlewares/auth');

const { login , createUser } = require('../controllers/users');

const { createUserValidation, loginValidation } = require('../middlewares/celebrate');

router.post('/signin', loginValidation, login);
router.post('/signup', createUserValidation, createUser);

router.use(auth);

//router.delete('/signout', signout);

router.use('/routes/users.js');
router.use('/routes/movies.js');

module.exports = router;




Реализуйте аутентификацию и авторизацию
В API должно быть ещё два роута: для регистрации и логина.
# создаёт пользователя с переданными в теле
# email, password и name
POST /signup

# проверяет переданные в теле почту и пароль
# и возвращает JWT
POST /signin
Эти два роута не нужно защищать авторизацией.
Обратите внимание: если сохранять JWT в куках, понадобится дополнительный роут POST /signout. При запросе к роуту удалится JWT из куков пользователя.