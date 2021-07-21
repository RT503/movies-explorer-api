const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');

const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const { errors } = require('celebrate');

const { PORT, BASE_URL } = require('./config');
const routes = require('./routes/index');

const limiter = require('./middlewares/limiter');
const handleErrors = require('./middlewares/handleErrors');

const { requestLogger, errorLogger } = require('./middlewares/logger');

const app = express();

mongoose.connect(BASE_URL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

const corsConfig = {
  origin: [
    'https://rt503diploma.nomoredomains.club/',
    'http://rt503diploma.nomoredomains.club',
    'https://localhost:3000',
    'http://localhost:3000',
  ],
  methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
  preflightContinue: false,
  optionsSuccessStatus: 204,
  allowedHeaders: ['Content-Type', 'Origin', 'Referer', 'Accept', 'Authorization'],
  credentials: true,
};

app.use(requestLogger);
app.use(limiter);
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());

app.use(cors(corsConfig));

app.use(routes);

app.use(errorLogger);
app.use(errors());

app.use(handleErrors);

app.listen(PORT);
