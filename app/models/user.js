module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      firstName: { type: DataTypes.STRING, allowNull: true },
      lastName: { type: DataTypes.STRING, allowNull: true },
      email: { type: DataTypes.STRING, allowNull: false, unique: true },
      password: { type: DataTypes.STRING, allowNull: false }
    },
    {
      tableName: 'users',
      freezeTableName: true,
      timestamps: true,
      paranoid: true,
      underscored: true
    }
  );

  User.associate = models => {
    User.belongsTo(models.Role, {
      as: 'role',
      foreignKey: 'roleId'
    });
    User.hasMany(models.Album, { as: 'albums' });
  };

  return User;
};
