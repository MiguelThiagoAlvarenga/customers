const express = require('express');
        router = express.Router();
        cityController = require('../controllers/city.controller');

router.get('/getAllByState?:uf', cityController.getAllByState);

module.exports = router;
