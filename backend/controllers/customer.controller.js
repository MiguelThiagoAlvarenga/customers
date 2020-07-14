const   models = require('../models')
        Customer = models.Customers
        CustomerService = require("../services/customer.service")

exports.create = async (req, res) => {
  res.json(await CustomerService.create(req.body.params.customer));
};

exports.update = async (req, res) => {
  res.json(await CustomerService.update(req.body.params.customer));
};

exports.getAll = async (req, res) => {
  res.json(await Customer.findAll());
};

exports.delete = async (req, res) => {
  const id = req.params.id;

  res.json(await Customer.delete(id));
};
