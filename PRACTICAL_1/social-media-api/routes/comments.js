const express = require('express');
const {
    getComments,
    getComment,
    createComment,
    updateComment,
    deleteComment
} = require('../controllers/userComment');

router.route('/posts/:postId/comments')
  .get(getCommentsByPost)
  .post(createComment);

// Direct comment routes
router.route('/comments/:id')
  .get(getComment)
  .put(updateComment)
  .delete(deleteComment);

module.exports = router;