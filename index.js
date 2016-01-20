/**
 * Module dependencies.
 */

var render = require('./lib/render');
var messageApi = require('./lib/message');
var i18n = require('i18n');
var serve = require('koa-static');
var route = require('koa-route');
var parse = require('co-body');
var koa = require('koa');
var app = koa();

// "database"

// static files

app.use(serve('./public/'));

// route middleware

app.use(route.get('/', home));
app.use(route.post('/message', message));

// generators

function *home() {
  this.body = yield render('index', { title: "Khem Labs" });
}

function *message() {
  var data = yield parse.form(this);
  data.created_at = new Date;
  messageApi.save(data);
  this.body = { result : 'ok' };
}

// listen

app.listen(3000);
console.log('listening on port 3000');
