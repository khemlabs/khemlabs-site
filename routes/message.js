var express         = require('express')
    ,router         = express.Router()
    ,messageService = require('../services/Message');

router.post('/', function(req, res, next) {
  messageService.save(req.body);
  return res.json({ result: 'ok'});
});

module.exports = router;
