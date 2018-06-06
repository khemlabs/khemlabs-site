var express = require('express'),
	locale = require('locale'),
	supported = new locale.Locales(['en', 'es']),
	router = express.Router(),
	config = require('../config/config');

const libs = config.CLIENT_LIBS;
const styles = config.CLIENT_STYLES_LIBS;

router.get('/', (req, res, next) => {
	const locales = new locale.Locales(req.headers['accept-language']);
	return res.redirect(`${req.protocol}://${req.get('host')}/${locales.best(supported)}`);
});

router.get('/es', (req, res, next) => res.render('partials/index.ejs', { styles, libs, lang: 'es' }));

router.get('/es_AR', (req, res, next) => res.render('partials/index.ejs', { styles, libs, lang: 'es' }));

router.get('/en', (req, res, next) => res.render('partials/index.ejs', { styles, libs, lang: 'en' }));

router.get('/en_US', (req, res, next) => res.render('partials/index.ejs', { styles, libs, lang: 'en' }));

module.exports = router;
