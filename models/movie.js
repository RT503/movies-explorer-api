const mongoose = require('mongoose');
const validator = require('validator');

const movieSchema = new mongoose.Schema({
  country: {
    required: true,
    type: String,
  },
  director: {
    type: String,
    required: true,
  },
  duration: {
    required: true,
    type: Number,
  },
  year: {
    required: true,
    type: Date,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    required: true,
    type: String,
    validate: {
      validator: (v) => /^(https?:\/\/)(www\.)?([\da-z-.]+)\.([a-z.]{2,6})[\da-zA-Z-._~:?#[\]@!$&'()*+,;=/]*\/?#?$/.test(v),
    },
  },
  trailer: {
    required: true,
    type: String,
    validate: {
      validator: (v) => /^(https?:\/\/)(www\.)?([\da-z-.]+)\.([a-z.]{2,6})[\da-zA-Z-._~:?#[\]@!$&'()*+,;=/]*\/?#?$/.test(v),
    },
  },
    thumbnail: {
      required: true,
      type: String,
      validate: {
        validator: (v) => /^(https?:\/\/)(www\.)?([\da-z-.]+)\.([a-z.]{2,6})[\da-zA-Z-._~:?#[\]@!$&'()*+,;=/]*\/?#?$/.test(v),
      },
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    movieId: {
      required: true,
      type: mongoose.Schema.Types.ObjectId, // id фильма, который содержится в ответе сервиса MoviesExplorer. Обязательное поле.
    },
    nameRU: {
      required: true,
      type: String,
      minLength: 2,
      maxLength: 30,
    },
    nameEN: {
      required: true,
      type: String,
      minLength: 2,
      maxLength: 30,
    },
});

module.exports = mongoose.model('movie', movieSchema);