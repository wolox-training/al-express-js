exports.userSerializer = user => ({
  id: user.id,
  firstName: user.firstName,
  lastName: user.lastName,
  email: user.email,
  createdAt: user.createdAt,
  updatedAt: user.updatedAt
});

exports.usersSerializer = users => ({
  count: users.count,
  rows: users.rows.map(this.userSerializer)
});
