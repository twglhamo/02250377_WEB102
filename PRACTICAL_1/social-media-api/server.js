const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const errorHandler = require('./middleware/errorHandler');
const formatResponse = require('./middleware/formatResponse');
require('dotenv').config();

const userRoutes = require('./routes/users');
const postRoutes = require('./routes/posts');
const commentRoutes = require('./routes/comments');
const likeRoutes = require('./routes/likes');
const followerRoutes = require('./routes/followers');

const app = express();

// Body parser
app.use(express.json());
app.use(express.static('public'));

// Middleware
app.use(morgan('dev'));
app.use(cors());
app.use(helmet());

// Routes
app.use('/users', userRoutes);
app.use('/posts', postRoutes);
app.use('/comments', commentRoutes);
app.use('/likes', likeRoutes);
app.use('/followers', followerRoutes);
app.use(errorHandler);
app.use(formatResponse);

// Home route
app.get('/', (req, res) => {
  res.send('API is running...');
});

// PORT
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});