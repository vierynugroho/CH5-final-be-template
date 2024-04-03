const router = require("express").Router();

const Shop = require("../controllers/shopController");

const autentikasi = require("../middlewares/authenticate");
const checkRole = require("../middlewares/checkRole");
const checkOwnership = require("../middlewares/checkOwnership");
const checkId = require("../middlewares/checkId");

router.get("/", Shop.findShops);
router.get("/:id", checkId, autentikasi, checkOwnership, Shop.findShopById);
router.patch(
  "/:id",
  checkId,
  autentikasi,
  checkOwnership,
  checkRole("Owner"),
  Shop.updateShop
);

module.exports = router;
