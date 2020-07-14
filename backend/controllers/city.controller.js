const models = require('../models');
      City = models.county;
      logger = require('../utils/logger');

exports.getAllByState = async (req, res) => {
  const options = {
    attributes: [ ['id', 'name'] ],
    where: { idState: req.query.uf },
    order: [
      ['name']
    ]
  };
    try {
        res.json(await City.findAll(options));
    } catch (e) {
      const msgErr = `In city.controller, method getAll:${e}`;
      logger.error(msgErr);
      res.json(msgErr);
    }
};

