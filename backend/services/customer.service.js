const models = require('../models')
      Customer = models.customers

module.exports = CustomerService = {
  async create(customer) {
    try {
      const newCustomer = new Customer({
        name: customer.name.trim(),
        cpr: customer.cpf.trim(),
        email: customer.email.trim(),
        telephone: customer.telephone.trim()
      });

      return newCustomer.save();
    } catch (e) {
      console.log(e)
      return e;
    }
  },
    async update(customer) {
      try {
        const updatedCustomer = new Customer({
          id: customer.id,
          name: customer.name.trim(),
          cpr: customer.cpf.trim(),
          email: customer.email.trim(),
          telephone: customer.telephone.trim()
        });

        return updatedCustomer.save();
      } catch (e) {
        console.log(e)
        return e;
      }
    }
}
