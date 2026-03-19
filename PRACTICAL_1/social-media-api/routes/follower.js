const express = require('express');
const router = express.Router();

const {
  getFollowers,
  createFollower,
  deleteFollower
} = require('../controllers/followerController');

router.get('/', getFollowers);
router.post('/', createFollower);
router.delete('/:id', deleteFollower);

module.exports = router;
