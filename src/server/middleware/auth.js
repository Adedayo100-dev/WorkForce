module.exports = {
  ensureAuth: function (req, res, next) {
    if (req.isAuthenticated()) {
<<<<<<< HEAD
      console.log(" 1.Ensure Auth: Log in confirmed")
=======
      console.log("Log in confirmed")
>>>>>>> 425148ffed216af13b23f428a7ed2a7b45042c10
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