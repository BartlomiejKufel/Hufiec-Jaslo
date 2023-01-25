var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose')



var mainRouter = require('./routes/mainRoutes');
var usersRouter = require('./routes/users');
var druzynyRouter = require('./routes/druzynyRoutes');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect('mongodb://hufiec-jaslo:jI22YU2nDqm9TR4AcQGp5I0gSKchOY72BVcNH58fb4meNINyjx6REzj4JJMpj6UqbB7bR7HILl8HACDbQX4TLA==@hufiec-jaslo.mongo.cosmos.azure.com:10255/?ssl=true&retrywrites=false&maxIdleTimeMS=120000&appName=@hufiec-jaslo@')

  

app.use(mainRouter);
app.use(druzynyRouter);
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
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
