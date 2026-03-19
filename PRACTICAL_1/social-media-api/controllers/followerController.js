const followers = [];

// GET all followers
exports.getFollowers = (req, res) => {
  res.status(200).json({
    success: true,
    count: followers.length,
    data: followers
  });
};

// CREATE follower
exports.createFollower = (req, res) => {
  const newFollower = {
    id: followers.length + 1,
    ...req.body
  };

  followers.push(newFollower);

  res.status(201).json({
    success: true,
    data: newFollower
  });
};

// DELETE follower
exports.deleteFollower = (req, res) => {
  const index = followers.findIndex(f => f.id == req.params.id);

  if (index === -1) {
    return res.status(404).json({ success: false });
  }

  followers.splice(index, 1);

  res.json({ success: true });
};