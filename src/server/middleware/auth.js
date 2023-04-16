module.exports = {
  ensureAuth: function (req, res, next) {
    if (req.isAuthenticated()) {
      console.log(" 1.Ensure Auth: Log in confirmed")
      // ! Important
      return next()
    } else {
      res.redirect('/')
      console.log("Ensure Auth: You are currently not logged in, redirected to /")
    }
    console.log(req.isAuthenticated());
  },
  ensureGuest: function (req, res, next) {
    if (!req.isAuthenticated()) {
      return next();
    } else {
      res.redirect('/profile');
    }
  },
}