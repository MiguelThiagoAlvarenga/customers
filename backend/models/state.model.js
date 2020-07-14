'use strict';
module.exports = (sequelize, DataTypes) => {
  const State = sequelize.define('state', {
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
    }
  }, {
    schema: 'public',
    underscored: true,
    underscoredAll: true,
    timestamps: false,
    freezeTableName: true
  });

  State.associate = function(models) {
  };

  return State
}
