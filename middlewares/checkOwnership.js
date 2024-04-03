const ApiError = require("../utils/apiError");

const checkOwnership = (req, res, next) => {
  if (req.user.shopId != req.params.id)
    return next(new ApiError("kamu bukan bagian dari toko ini", 401));

  next();
};

module.exports = checkOwnership;
