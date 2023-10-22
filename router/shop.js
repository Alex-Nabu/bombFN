const router = require("express").Router();

const shopController = require("../controller/shopController");
const mdl_itemDetail = require('../middleware/itemDetail')

router.get("/", shopController.getMapPage);
router.get("/shop", shopController.getShopPage);
router.get("/site.webmanifest", shopController.getWebmanifest);
router.get("/item-details", mdl_itemDetail, shopController.getItemDetails);
router.get("/cosmetics", shopController.getCosmeticsPage);

module.exports = router;
