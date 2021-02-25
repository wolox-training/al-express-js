const { UUIDV4 } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'users',
    {
      id: { type: DataTypes.UUID, defaultValue: UUIDV4, allowNull: false, primaryKey: true },
      firstName: { type: DataTypes.STRING, allowNull: true },
      lastName: { type: DataTypes.STRING, allowNull: true },
      email: { type: DataTypes.STRING, allowNull: false, unique: true },
      password: { type: DataTypes.STRING, allowNull: false }
    },
    {
      timestamps: true,
      underscored: true
    }
  );
  return User;
};
