const historyApiFallback = require("connect-history-api-fallback");
const open = require('open');
const favicon = require('express-favicon');
const path = require('path');
const express = require('express');
const app = express();

const globalConfig = require('../global.config');

const appPort = '3389';
const appBasePath = path.resolve(__dirname, '../dist/');


app.use(historyApiFallback({}));


app.use(express.static(appBasePath));
app.use(favicon('/favicon.ico'));

app.listen(appPort, error => {
  if (error) {
    console.log(error);
    return;
  }
  open('http://127.0.0.1:' + appPort);
});
