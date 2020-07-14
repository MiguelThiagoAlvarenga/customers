'use strict';
module.exports = (sequelize, DataTypes) => {
  const City = sequelize.define('county', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      field: 'name',
      type: DataTypes.STRING,
      allowNull: false
    },
    idState: {
      field: 'id_state',
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'State',
        key: 'id'
      }
    }
  }, {
    schema: 'public',
    underscored: true,
    underscoredAll: true,
    timestamps: false,
    freezeTableName: true
  });

  City.associate = function(models) {
  };

  return City
}
