require('dotenv').config();
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

//console.log(mongoose);
const
    DB_USER = process.env.MONGOUSER,
    DB_USER_PASSWORD = process.env.MONGOPASS,
    //DB_URL = `mongodb+srv://${DB_USER}:${DB_USER_PASSWORD}@songcluster-jz2ss.mongodb.net/test?retryWrites=true&w=majority`;
    DB_URL = `mongodb+srv://${DB_USER}:${DB_USER_PASSWORD}@global-settings-vydsp.mongodb.net/global_settings?retryWrites=true&w=majority`;
//`mongodb+srv://${DB_USER}:${DB_USER_PASSWORD}@global-settings-vydsp.mongodb.net/test?retryWrites=true&w=majority`;
mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('Connected to mongoDB');
});

// Web Examples Model
/* const WebExamplesSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    slug: String,
    thumbnail: String,
    title: String,
    project_url: String
}) */

const SettingsSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    main_email: String,
    bio: String,
    gitHub_url: String,
    linkedin_url: String,
    bio_intro: String,
    bio_tagline: String,
    bio_pic: String
}),

    SettingsModel = mongoose.model('profile_settings', SettingsSchema, 'profile_settings');

router.get('/', function (req, res, next) {
    //console.log('made it to profileSetting Route');
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

router.put('/', (req, res) => {
    console.log('put request made for profile settings');
    console.log(req.body);
    SettingsModel.findById("5ec40c318f3ebfe68a400e6f", (err, settings) => {
        if (err) {
            res.status(500).send(err);
        }
        if (settings) {
            settings.main_email = req.body.main_email;
            settings.bio_intro = req.body.bio_intro;
            settings.bio_tagline = req.body.bio_tagline;
            settings.bio_pic = req.body.bio_pic;
            settings.bio = req.body.bio;
            settings.linkedin_url = req.body.linkedin_url;
            settings.gitHub_url2 = req.body.gitHub_url;
            settings.save()
                .then(settings => {
                    console.log('settings: ', settings);
                    res.json(settings);
                }, err => {
                    console.log('err: ', err);
                    res.status(500).send(err);
                });
        } else {
            res.status(404).send('Settings Failed to Update');
        }
    });
});

module.exports = router;