exports.userSerializer = user => ({
  id: parseInt(user.id),
  firstName: user.firstName,
  lastName: user.lastName,
  email: user.email,
  role: user.role ? user.role.name : undefined,
  createdAt: user.createdAt,
  updatedAt: user.updatedAt
});

exports.usersSerializer = users => ({
  count: users.count,
  rows: users.rows.map(this.userSerializer)
});
