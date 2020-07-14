const models = require('../models')
      Customer = models.customers

module.exports = CustomerService = {
  async create(customer) {
    try {
      const newCustomer = new Customer({
        name: customer.name,
        cpf: customer.cpf,
        email: customer.email,
        telephone: customer.telephone
      });

      return await Customer.create(newCustomer.dataValues).then(customer => customer.dataValues);
    } catch (e) {
      console.log(e)
      return e;
    }
  },
    async update(customer) {
      try {
        return Customer.update(customer, { where: { id: parseInt(customer.id) } });
      } catch (e) {
        console.log(e)
        return e;
      }
    }
}
