const formatResponse = (req, res, next) => {
  const accept = req.headers.accept;

  if (accept && accept.includes('application/xml')) {
    res.formatType = 'xml';
  } else {
    res.formatType = 'json';
  }

  next();
};

module.exports = formatResponse;