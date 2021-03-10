module.exports = (sequelize, DataTypes) => {
  const Role = sequelize.define(
    'Role',
    {
      name: { type: DataTypes.STRING, allowNull: false }
    },
    {
      tableName: 'roles',
      freezeTableName: true,
      timestamps: true,
      paranoid: true,
      underscored: true
    }
  );

  Role.associate = models => Role.hasMany(models.User, { as: 'users' });

  return Role;
};
