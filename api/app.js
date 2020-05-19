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
var sendFormRouter = require('./routes/sendFormAPI');
var mongoose = require('mongoose');

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
app.use(bodyParser.json());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/myworkAPI', myworkAPIRouter);
app.use('/codeExamplesAPI', codeExamplesAPIRouter);
app.use('/sendFormAPI', sendFormRouter);
app.use('/testAPI', testAPIRouter);



//console.log(mongoose);
const
  DB_USER = process.env.MONGOUSER,
  DB_USER_PASSWORD = process.env.MONGOPASS,
  //DB_URL = `mongodb+srv://${DB_USER}:${DB_USER_PASSWORD}@songcluster-jz2ss.mongodb.net/test?retryWrites=true&w=majority`;
  DB_URL = `mongodb+srv://${DB_USER}:${DB_USER_PASSWORD}@global-settings-vydsp.mongodb.net/global_settings?retryWrites=true&w=majority`;

mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Connected to mongoDB');
});

// Web Examples Model
const WebExamplesSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  slug: String,
  thumbnail: String,
  title: String,
  project_url: String
})

const SettingsSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  main_email: String,
  bio: String,
  github_url: String,
  linkedin_url: String,
}),

SettingsModel = mongoose.model('profile_settings', SettingsSchema);



app.get('/profileSettings', (req, res) => {
  console.log('made it to profileSetting Route');
  SettingsModel.find((err, settings) => {
    if (err) {
      console.log('!=-error-=!');
      res.status(500).send(err);
    } else {
      console.log('!=-Success-=!');
      res.json(settings);
    }
  });
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