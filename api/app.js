var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var bodyParser = require('body-parser');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var testAPIRouter = require('./routes/testAPI');
var myworkAPIRouter = require('./routes/myworkAPI');
var codeExamplesAPIRouter = require('./routes/codeExamplesAPI');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extend: true}));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/myworkAPI', myworkAPIRouter);
app.use('/codeExamplesAPI', codeExamplesAPIRouter);
app.use('/testAPI', testAPIRouter);

app.post('/submitform', (req, res) => {
  // Instantiate the SMTP server
  /* const smtpTrans = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: 'craigbauer23@gmail.com',
      pass: 'xxx'
    }
  }) */

  // Specify what the email will look like
  /* const mailOpts = {
    from: 'user', // This is ignored by Gmail
    to: Craig Bauer,
    subject: 'New message from contact form at craigbauerwebdev.com',
    text: `${req.body.name} (${req.body.email}) says: ${req.body.message}`
  } */

  //res.send(`${req.body.name} (${req.body.email}) says: ${req.body.message}`)
  res.send('success');

  // Attempt to send the email
  /* smtpTrans.sendMail(mailOpts, (error, response) => {
    if (error) {
      res.send('contact-failure') // Send failure
    }
    else {
      res.send('contact-success') // Send success
    }
  }) */
});

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