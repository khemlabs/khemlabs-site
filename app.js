/**
 * Module dependencies.
 */
const express = require('express'),
	partials = require('express-partials'),
	bodyParser = require('body-parser'),
	app = express(),
	path = require('path'),
	http = require('http'),
	i18n = require('i18n'),
	ejs = require('ejs'),
	messageRouter = require('./routes/message'),
	homeRouter = require('./routes/home'),
	log = require('./services/Log'),
	config = require('./config/config');

// Configure app
const server = http.createServer(app);

i18n.configure({
	locales: ['en', 'es'],
	defaultLocale: 'es',
	directory: path.join(__dirname, 'locales'),
	extension: '.json',
	logDebugFn: function(msg) {
		log.info(msg, 'app.js', 'configure');
	},
	logWarnFn: function(msg) {
		log.warning(msg, 'app.js', 'configure');
	},
	logErrorFn: function(msg) {
		log.error(msg, 'app.js', 'configure');
	}
});
app.use(i18n.init);

// load the express-partials middleware
app.use(partials());

app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/message', messageRouter);
app.use('/', homeRouter);

// static files
app.use(express.static(path.join(__dirname, 'public')));

config.CLIENT_LIBS.forEach(lib => {
	const staticPath = `${__dirname}/${lib.path}`;
	log.info(`path (${lib.path}) added as static path`, 'app.js', 'static_libs');
	app.use(`/${lib.path}`, express.static(staticPath));
});

config.CLIENT_STYLES_LIBS.forEach(style => {
	const staticPath = `${__dirname}/${style.path}`;
	log.info(`path (${style.path}) added as static path`, 'app.js', 'static_styles_libs');
	app.use(`/${style.path}`, express.static(staticPath));
});

// listen
server.listen(process.env.PORT || 3000, function() {
	const address = server.address().address;
	const host = address && address !== '::' ? address : 'localhost',
		port = server.address().port;
	console.info('[app] Listening at http://%s:%s', host, port);
});
