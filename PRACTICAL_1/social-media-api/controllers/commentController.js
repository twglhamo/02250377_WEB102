const comments = [];

// GET all comments
exports.getComments = (req, res) => {
  res.status(200).json({
    success: true,
    count: comments.length,
    data: comments
  });
};

// GET single comment
exports.getComment = (req, res) => {
  const comment = comments.find(c => c.id == req.params.id);

  if (!comment) {
    return res.status(404).json({
      success: false,
      message: 'Comment not found'
    });
  }

  res.json({ success: true, data: comment });
};

// CREATE comment
exports.createComment = (req, res) => {
  const newComment = {
    id: comments.length + 1,
    ...req.body
  };

  comments.push(newComment);

  res.status(201).json({
    success: true,
    data: newComment
  });
};

// UPDATE comment
exports.updateComment = (req, res) => {
  const comment = comments.find(c => c.id == req.params.id);

  if (!comment) {
    return res.status(404).json({ success: false });
  }

  Object.assign(comment, req.body);

  res.json({ success: true, data: comment });
};

// DELETE comment
exports.deleteComment = (req, res) => {
  const index = comments.findIndex(c => c.id == req.params.id);

  if (index === -1) {
    return res.status(404).json({ success: false });
  }

  comments.splice(index, 1);

  res.json({ success: true });
};

