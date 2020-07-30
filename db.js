const mongoose = require('mongoose');

const urlMongo = 'mongodb://heroku_p66mmkdp:hpjs99ao7ol6agbekut8cpbun1@ds139665.mlab.com:39665/heroku_p66mmkdp';

const config = { useNewUrlParser: true, useUnifiedTopology: true }

mongoose.connect(urlMongo, config);