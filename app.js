const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const esviews = require("es6views");
const {verifyToken} = require("./helper");

const apikeyMiddleWare = require("./middle-ware/apiKey");
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const loginRouter = require('./routes/login');

const app = express();

// view engine setup
esviews.viewEngine(app)
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'es6')

const getAuthenticatedUser = (req, res, next) => {

  const {authorization} = req.headers
  const data = verifyToken(authorization);
  console.log(data)
  if(data.email === "abhijeet@gmail.com") {
   return next();
  }

  res.status(401).json()
}


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(apikeyMiddleWare);

app.post('/login', loginRouter);
app.get('/about', indexRouter);
app.get('/posts', indexRouter);
app.get('/contact', indexRouter);
app.get('/home', indexRouter);
app.get('/api/products', indexRouter);
app.use(getAuthenticatedUser);
app.get('/users', usersRouter);


app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  console.log(err.status)
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;