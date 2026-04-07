const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const { comments, posts, users } = require('../utils/mockData');

// @desc Get all comments
// @route GET /api/comments
// @access Public
exports.getComments = asyncHandler(async (req, res, next) => {
  res.status(200).json({
    success: true,
    count: comments.length,
    data: comments
  });
});

// @desc Get single comment
// @route GET /api/comments/:id
// @access Public
exports.getComment = asyncHandler(async (req, res, next) => {
  const comment = comments.find(c => c.id === req.params.id);
<<<<<<< HEAD
  
=======

>>>>>>> 6247e12f432a4cc81be3296eec07bafe765fb977
  if (!comment) {
    return next(
      new ErrorResponse(`Comment not found with id of ${req.params.id}`, 404)
    );
  }
<<<<<<< HEAD
  
=======

>>>>>>> 6247e12f432a4cc81be3296eec07bafe765fb977
  res.status(200).json({
    success: true,
    data: comment
  });
});

// @desc Create comment
// @route POST /api/comments
// @access Private
exports.createComment = asyncHandler(async (req, res, next) => {
  const userId = req.header('X-User-Id');
<<<<<<< HEAD
  
  if (!userId) {
    return next(new ErrorResponse('Not authorized', 401));
  }
  
=======

  if (!userId) {
    return next(new ErrorResponse('Not authorized', 401));
  }

>>>>>>> 6247e12f432a4cc81be3296eec07bafe765fb977
  const newComment = {
    id: (comments.length + 1).toString(),
    text: req.body.text,
    post_id: req.body.post_id,
    user_id: userId,
    created_at: new Date().toISOString().slice(0, 10)
  };
<<<<<<< HEAD
  
  comments.push(newComment);
  
=======

  comments.push(newComment);

>>>>>>> 6247e12f432a4cc81be3296eec07bafe765fb977
  res.status(201).json({
    success: true,
    data: newComment
  });
});

// @desc Update comment
// @route PUT /api/comments/:id
// @access Private
exports.updateComment = asyncHandler(async (req, res, next) => {
  const userId = req.header('X-User-Id');
<<<<<<< HEAD
  
  let comment = comments.find(c => c.id === req.params.id);
  
=======

  let comment = comments.find(c => c.id === req.params.id);

>>>>>>> 6247e12f432a4cc81be3296eec07bafe765fb977
  if (!comment) {
    return next(
      new ErrorResponse(`Comment not found with id of ${req.params.id}`, 404)
    );
  }
<<<<<<< HEAD
  
  if (comment.user_id !== userId) {
    return next(new ErrorResponse('Not authorized', 401));
  }
  
=======

  if (comment.user_id !== userId) {
    return next(new ErrorResponse('Not authorized', 401));
  }

>>>>>>> 6247e12f432a4cc81be3296eec07bafe765fb977
  const index = comments.findIndex(c => c.id === req.params.id);

  comments[index] = {
    ...comment,
    ...req.body,
    id: comment.id
  };
<<<<<<< HEAD
  
=======

>>>>>>> 6247e12f432a4cc81be3296eec07bafe765fb977
  res.status(200).json({
    success: true,
    data: comments[index]
  });
});

// @desc Delete comment
// @route DELETE /api/comments/:id
// @access Private
exports.deleteComment = asyncHandler(async (req, res, next) => {
  const userId = req.header('X-User-Id');
<<<<<<< HEAD
  
  const comment = comments.find(c => c.id === req.params.id);
  
=======

  const comment = comments.find(c => c.id === req.params.id);

>>>>>>> 6247e12f432a4cc81be3296eec07bafe765fb977
  if (!comment) {
    return next(
      new ErrorResponse(`Comment not found with id of ${req.params.id}`, 404)
    );
  }
<<<<<<< HEAD
  
  if (comment.user_id !== userId) {
    return next(new ErrorResponse('Not authorized', 401));
  }
  
  const index = comments.findIndex(c => c.id === req.params.id);
  comments.splice(index, 1);
  
=======

  if (comment.user_id !== userId) {
    return next(new ErrorResponse('Not authorized', 401));
  }

  const index = comments.findIndex(c => c.id === req.params.id);
  comments.splice(index, 1);

>>>>>>> 6247e12f432a4cc81be3296eec07bafe765fb977
  res.status(200).json({
    success: true,
    data: {}
  });
});