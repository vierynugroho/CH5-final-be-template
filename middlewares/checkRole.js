const ApiError = require("../utils/apiError");

const checkRole = (role) => {
  return async (req, res, next) => {
    try {
      if (req.user.role !== role) {
        next(new ApiError(`kamu bukan ${role} jadi tidak bisa akses`, 401));
      }
      next();
    } catch (err) {
      next(new ApiError(err.message, 500));
    }
  };
};

module.exports = checkRole;
