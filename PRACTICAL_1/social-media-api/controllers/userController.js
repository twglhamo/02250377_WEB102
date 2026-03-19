const { users } = require('../utils/mockData');

// GET all users
exports.getUsers = (req, res) => {
  res.status(200).json({
    success: true,
    count: users.length,
    data: users
  });
};

// GET single user
exports.getUser = (req, res) => {
  const user = users.find(u => u.id == req.params.id);

  if (!user) {
    return res.status(404).json({
      success: false,
      message: 'User not found'
    });
  }

  res.json({ success: true, data: user });
};

// CREATE
exports.createUser = (req, res) => {
  const newUser = {
    id: users.length + 1,
    ...req.body
  };

  users.push(newUser);

  res.status(201).json({
    success: true,
    data: newUser
  });
};

// UPDATE
exports.updateUser = (req, res) => {
  const user = users.find(u => u.id == req.params.id);

  if (!user) {
    return res.status(404).json({
      success: false
    });
  }

  Object.assign(user, req.body);

  res.json({ success: true, data: user });
};

// DELETE
exports.deleteUser = (req, res) => {
  const index = users.findIndex(u => u.id == req.params.id);

  if (index === -1) {
    return res.status(404).json({
      success: false
    });
  }

  users.splice(index, 1);

  res.json({ success: true });
};