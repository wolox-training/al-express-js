module.exports = (sequelize, DataTypes) => {
  const Album = sequelize.define(
    'Album',
    {
      title: { type: DataTypes.STRING, allowNull: false, unique: true }
    },
    {
      tableName: 'albums',
      freezeTableName: true,
      timestamps: false,
      underscored: true
    }
  );

  Album.associate = models =>
    Album.belongsTo(models.User, {
      as: 'user',
      foreignKey: 'userId'
    });

  return Album;
};
