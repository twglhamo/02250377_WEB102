const express = require('express');
const router = express.Router();

const {
  getLikes,
  createLike,
  deleteLike
} = require('../controllers/likeController');

router.get('/', getLikes);
router.post('/', createLike);
router.delete('/:id', deleteLike);

module.exports = router;