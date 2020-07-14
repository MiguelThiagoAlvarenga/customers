const   models = require('../models')
        Customer = models.Customers
        CustomerService = require("../services/customer.service")

exports.create = async (req, res) => {
  res.json(await CustomerService.create(req.body.customer));
};

exports.update = async (req, res) => {
  res.json(await CustomerService.update(req.body.customer));
};

exports.getAll = async (req, res) => {
  res.json(await Customer.findAll());
};

exports.delete = async (req, res) => {
  const option ={ where: { id: parseInt(req.params.id) } } ;

  res.json(await Customer.destroy(option));
};
