var express     = require('express')
    ,locale     = require("locale")
    ,supported  = new locale.Locales(["en", "es"])
    ,router     = express.Router();

router.get('/', function(req, res, next) {
  var locales = new locale.Locales(req.headers["accept-language"])
  return res.redirect(req.protocol + '://' + req.get('host') + '/' + locales.best(supported))
});

router.get('/es', function(req, res, next) {
  return res.render('partials/index.ejs', {lang: 'es'});
});

router.get('/es_AR', function(req, res, next) {
  return res.render('partials/index.ejs', {lang: 'es'});
});

router.get('/en', function(req, res, next) {
  return res.render('partials/index.ejs', {lang: 'en'});
});

router.get('/en_US', function(req, res, next) {
  return res.render('partials/index.ejs', {lang: 'en'});
});

module.exports = router;