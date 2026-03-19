const posts = [];

// GET all posts
exports.getPosts = (req, res) => {
  res.status(200).json({
    success: true,
    count: posts.length,
    data: posts
  });
};

// GET single post
exports.getPost = (req, res) => {
  const post = posts.find(p => p.id == req.params.id);

  if (!post) {
    return res.status(404).json({
      success: false,
      message: 'Post not found'
    });
  }

  res.json({ success: true, data: post });
};

// CREATE post
exports.createPost = (req, res) => {
  const newPost = {
    id: posts.length + 1,
    ...req.body
  };

  posts.push(newPost);

  res.status(201).json({
    success: true,
    data: newPost
  });
};

// UPDATE post
exports.updatePost = (req, res) => {
  const post = posts.find(p => p.id == req.params.id);

  if (!post) {
    return res.status(404).json({ success: false });
  }

  Object.assign(post, req.body);

  res.json({ success: true, data: post });
};

// DELETE post
exports.deletePost = (req, res) => {
  const index = posts.findIndex(p => p.id == req.params.id);

  if (index === -1) {
    return res.status(404).json({ success: false });
  }

  posts.splice(index, 1);

  res.json({ success: true });
};