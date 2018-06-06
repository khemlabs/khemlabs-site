const express = require('express'),
	router = express.Router(),
	messageService = require('../services/Message');

router.post('/', (req, res, next) => {
	messageService.save(req.body);
	return res.json({ result: 'ok' });
});

module.exports = router;
