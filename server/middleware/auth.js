const auth = (req, res, next) => {
  if (req.session.isAuthenticated) {
    next();
  } else {
    res.status(401).json({ 
      success: false, 
      message: 'Authentication required' 
    });
  }
};

module.exports = auth;
