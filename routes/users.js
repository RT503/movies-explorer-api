const router = require('express').Router();



















// Создайте роуты и контроллеры
// В API должно быть 5 роутов:
// # возвращает информацию о пользователе (email и имя)
// GET /users/me

// # обновляет информацию о пользователе (email и имя)
// PATCH /users/me

// # возвращает все сохранённые пользователем фильмы
// GET /movies

// # создаёт фильм с переданными в теле
// # country, director, duration, year, description, image, trailer, nameRU, nameEN и thumbnail, movieId
// POST /movies

// # удаляет сохранённый фильм по id
// DELETE /movies/movieId
// Создайте контроллер для каждого роута. Защитите роуты авторизацией: если клиент не прислал JWT, доступ к роутам ему должен быть закрыт.