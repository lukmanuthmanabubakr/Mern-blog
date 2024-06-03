import bcryptjs from "bcryptjs";

export const test = (req, res) => {
  res.json({ message: `Api is working fine` });
};

export const updateUser = async (req, res, next) => {
  // res.json({})
  // console.log(req.user);
  if (req.user.id !== req.params.userId) {
    return next(errorHandler(403, "You are not allowed to update this year"));
  }
  if (req.body.password) {
    if (req.body.password.length < 6) {
      return next(errorHandler(400, "Password must be at least 6 characters"));
    }
    req.body.password = bcryptjs.hashSync(req.body.password, 10);
  }
  if (req.body.username) {
    if (req.body.username.length < 7 || req.body.username.length > 20) {
      return next(
        errorHandler(400, "Username must be between 7 and 20 characters")
      );
    }
    if (req.body.username.includes(" ")) {
      return next(errorHandler(400, "Username cannot contain spaces"));
    }
    if (req.body.username !== req.body.username.toLowerCase()) {
      return next(errorHandler(400, "Username must be lowercase"));
    }
    if (!req.body.username.match(/^[a-zA-Z0-9]+$/)) {
      return next(
        errorHandler(400, "Username can only contains letters and numbers")
      );
    }
    try {
        
    } catch (error) {
        next(error)
    }
   
  }
};
