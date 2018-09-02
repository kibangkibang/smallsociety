var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');
var fs = require('fs');
var jade = require('jade');
var mysql = require('mysql');

var client = mysql.createConnection({
	user : 'root',
	password : 'csda3232',
	database : 'company'
});

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var bookclub = require('./routes/bookclub');
var artclub = require('./routes/artclub');
var videoclub = require('./routes/videoclub');
var apply = require('./routes/apply');
var information = require('./routes/information');
var introduce = require('./routes/introduce');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/bookclub',bookclub);
app.use('/artclub',artclub);
app.use('/videoclub',videoclub);
app.use('/apply',apply);
app.use('/information',information);
app.use('/introduce',introduce);

app.get('/member',function(request,response){
	client.query('select * from membership',function(error,data){
		response.send(data);
	})
})
app.post('/apply',function(request,response){
  var body = request.body;
  var email = body.email;
  var password = body.password;
  var name = body.name;
  var birth = body.birth;
  var number = body.number;
  client.query('insert into membership(email,password,name,birth,phonenumber)value(?,?,?,?,?)',[email,password,name,birth,number],function(){
    response.redirect('/apply');
  })
})


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
