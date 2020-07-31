const mongoose = require('mongoose');

const urlMongo = process.env.URL_MONGO;

const config = { useNewUrlParser: true, useUnifiedTopology: true }

mongoose.connect(urlMongo, config);