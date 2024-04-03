const { Shop } = require("../models");
const imagekit = require("../lib/imagekit");
const ApiError = require("../utils/apiError");

const findShops = async (req, res, next) => {
  try {
    const shops = await Shop.findAll();

    res.status(200).json({
      status: "Success",
      data: {
        shops,
      },
    });
  } catch (err) {
    next(new ApiError(err.message, 400));
  }
};

const findShopById = async (req, res, next) => {
  try {
    const shop = await Shop.findOne({
      where: {
        id: req.params.id,
      },
    });

    res.status(200).json({
      status: "Success",
      data: {
        shop,
      },
    });
  } catch (err) {
    next(new ApiError(err.message, 400));
  }
};

const updateShop = async (req, res, next) => {
  const { name } = req.body;
  try {
    await Shop.update(
      {
        name,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );

    res.status(200).json({
      status: "Success",
      message: "sukses update shop",
    });
  } catch (err) {
    next(new ApiError(err.message, 400));
  }
};

const deleteShop = async (req, res, next) => {
  try {
    const shop = await Shop.findOne({
      where: {
        id: req.params.id,
      },
    });

    if (!shop) {
      next(new ApiError("Shop id tersebut gak ada", 404));
    }

    await shop.destroy({
      where: {
        id: req.params.id,
      },
    });

    res.status(200).json({
      status: "Success",
      message: "sukses delete shop",
    });
  } catch (err) {
    next(new ApiError(err.message, 500));
  }
};

const createShop = async (req, res) => {
  try {
    const { name } = req.body;

    const shop = await Shop.create({
      name,
    });

    res.status(201).json({
      status: "success",
      data: {
        shop,
      },
    });
  } catch (err) {
    next(new ApiError(err.message, 500));
  }
};

module.exports = {
  findShops,
  findShopById,
  updateShop,
  deleteShop,
  createShop,
};
