var express = require('express'),
	locale = require('locale'),
	supported = new locale.Locales(['en', 'es']),
	router = express.Router();

router.get('/', (req, res, next) => {
	const locales = new locale.Locales(req.headers['accept-language']);
	return res.redirect(`${req.protocol}://${req.get('host')}/${locales.best(supported)}`);
});

router.get('/es', (req, res, next) => res.render('partials/index.ejs', { lang: 'es' }));

router.get('/es_AR', (req, res, next) => res.render('partials/index.ejs', { lang: 'es' }));

router.get('/en', (req, res, next) => res.render('partials/index.ejs', { lang: 'en' }));

router.get('/en_US', (req, res, next) => res.render('partials/index.ejs', { lang: 'en' }));

module.exports = router;
