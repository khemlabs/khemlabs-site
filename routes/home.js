var express = require('express'),
    router = express.Router();

var translate = function(req, res, next, lang){
  return res.render('index', { 
    menu_about: res.__({phrase: 'menu_about', locale: lang}),
    menu_team: res.__({phrase: 'menu_team', locale: lang}),
    menu_services: res.__({phrase: 'menu_services', locale: lang}),
    menu_clients: res.__({phrase: 'menu_clients', locale: lang}),
    menu_contact: res.__({phrase: 'menu_contact', locale: lang}),
    description_about: res.__({phrase: 'description_about', locale: lang}),
    title_singlepage: res.__({phrase: 'title_singlepage', locale: lang}),
    khemlabs_frase: res.__({phrase: 'khemlabs_frase', locale: lang}),
    description_lmoya: res.__({phrase: 'description_lmoya', locale: lang}),
    description_pgambetta: res.__({phrase: 'description_pgambetta', locale: lang}),
    description_achambeaud: res.__({phrase: 'description_achambeaud', locale: lang}),
    title_rest: res.__({phrase: 'title_rest', locale: lang}),
    description_rest: res.__({phrase: 'description_rest', locale: lang}),
    title_canvas: res.__({phrase: 'title_canvas', locale: lang}),
    description_canvas: res.__({phrase: 'description_canvas', locale: lang}),
    description_singlepage: res.__({phrase: 'description_singlepage', locale: lang}),
    title_realtime: res.__({phrase: 'title_realtime', locale: lang}),
    description_realtime: res.__({phrase: 'description_realtime', locale: lang}),
    name_contact: res.__({phrase: 'name_contact', locale: lang}),
    company_contact: res.__({phrase: 'company_contact', locale: lang}),
    email_contact: res.__({phrase: 'email_contact', locale: lang}),
    message_contact: res.__({phrase: 'message_contact', locale: lang}),
    send_contact: res.__({phrase: 'send_contact', locale: lang})
  });
};

router.get('/', function(req, res, next) {
  return translate(req, res, next, 'es');
});

router.get('/es', function(req, res, next) {
  return translate(req, res, next, 'es');
});

router.get('/en', function(req, res, next) {
  return translate(req, res, next, 'en');
});

module.exports = router;