'use strict';

module.exports = (sequelize, DataTypes) => {
  const Customer = sequelize.define('customers', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: "Name"
    },
    cpf: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: "Cpf"
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "Email"
    },
    telephone: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "Telephone of the customer"
    }
  },{
    schema: 'app',
    underscored: true,
    underscoredAll: true,
    timestamps: true
  });

  Customer.associate = function(models) { };
  return Customer;
};