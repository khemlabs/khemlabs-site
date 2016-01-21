/**
 * Module dependencies.
 */
var express           = require('express')
    ,bodyParser       = require('body-parser')
    ,app              = express()
    ,path             = require('path')
    ,i18n             = require('i18n')
    ,ejs              = require('ejs')
    ,messageRouter    = require('./routes/message')
    ,homeRouter       = require('./routes/home')
    ,log              = require("./services/Log");

// Configure app

i18n.configure({
    locales:['en', 'es'],
    defaultLocale: 'es',
    directory: path.join(__dirname, 'locales'),
    extension: '.json',
    logDebugFn: function (msg) {
        log.info(msg, 'app.js', 'configure');
    },
    logWarnFn: function (msg) {
        log.warning(msg, 'app.js', 'configure');
    },
    logErrorFn: function (msg) {
        log.error(msg, 'app.js', 'configure');
    }
});
app.use(i18n.init);

app.set('view engine', 'ejs');  

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/message', messageRouter);
app.use('/', homeRouter);

// static files
app.use(express.static(path.join(__dirname, 'public')));

// listen

app.listen(3000);
log.info('Listening on port 3000', 'app.js', 'Init');
