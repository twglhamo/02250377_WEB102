const likes = [];

// GET all likes
exports.getLikes = (req, res) => {
  res.status(200).json({
    success: true,
    count: likes.length,
    data: likes
  });
};

// CREATE like
exports.createLike = (req, res) => {
  const newLike = {
    id: likes.length + 1,
    ...req.body
  };

  likes.push(newLike);

  res.status(201).json({
    success: true,
    data: newLike
  });
};

// DELETE like
exports.deleteLike = (req, res) => {
  const index = likes.findIndex(l => l.id == req.params.id);

  if (index === -1) {
    return res.status(404).json({ success: false });
  }

  likes.splice(index, 1);

  res.json({ success: true });
};