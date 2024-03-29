const Movie = require('../models/movie');

const NotFoundError = require('../errors/not-found-err');
// const ForbiddenError = require('../errors/forbidden-err');

const getMovies = (req, res, next) => {
  Movie.find({})
    .then((movies) => {
        if (movies.length === 0) {
          throw new NotFoundError('Еще не сохранено ни одного фильма');
        }
      res.send(movies);
    })
    .catch(next);
};

const createMovie = (req, res, next) => {
  const {
    country,
    director,
    duration,
    year,
    description,
    image,
    trailer,
    thumbnail,
    movieId,
    nameRU,
    nameEN,
  } = req.body;

  const owner = req.user._id;

  Movie.create({
    country,
    director,
    duration,
    year,
    description,
    image,
    trailer,
    thumbnail,
    owner,
    movieId,
    nameRU,
    nameEN,
  })
    .then((movie) => {
      res.send(movie);
    })
    .catch((err) => {
      next(err);
    });
};

const deleteMovie = (req, res, next) => {
  const id = req.params._id;
  Movie.findById({ _id: id })
    .then((movie) => {
      if (!movie) {
        throw new NotFoundError('Указанный фильм не найден');
      }
      // if (JSON.stringify(movie.owner) !== JSON.stringify(req.user._id)) {
      //   throw new ForbiddenError('У вас нет прав для удаления данной фильма');
      // }

      Movie.deleteOne({ _id: id })
        .then(() => {
          res.send(movie);
        })
        .catch(next);
    })
    .catch(next);
};

module.exports = {
  getMovies,
  createMovie,
  deleteMovie,
};
