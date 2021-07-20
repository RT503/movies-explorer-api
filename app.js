const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { PORT = 3000 } = process.env;

const app = express();

mongoose.connect('mongodb://localhost:27017/bestmoviesdb', {
  useNewUrlParser: true,
  useCreateIndex: true,
    useFindAndModify: false
});



///bitfilmsdb


app.listen(PORT, () => {

  console.log('Слушаемсссс');

})