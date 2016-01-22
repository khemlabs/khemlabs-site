var express = require('express'),
    router = express.Router();

router.get('/', function(req, res, next) {
  return res.render('partials/index.ejs', {lang: 'es'});
});

router.get('/en', function(req, res, next) {
  return res.render('partials/index.ejs', {lang: 'en'});
});

module.exports = router;