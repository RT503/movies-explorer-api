const router = require('express').Router();

// const {
//   // createMovieValidation,
//   // deleteMovieValidation,
// } = require('../middlewares/celebrate');

const {
  getMovies,
  createMovie,
  deleteMovie,
} = require('../controllers/movies');

router.get('/', getMovies);
router.post('/', createMovie);
router.delete('/:_id', deleteMovie);

module.exports = router;
