const express = require("express");
const router = express.Router();
const productController = require("../controllers/product");

router.post("/addProduct", productController.addProduct);
router.get("/getAllProducts", productController.getAllProducts);
router.delete("/deleteProduct", productController.deleteProduct);
router.post("/editProductSend", productController.editProductSend);
router.post("/editProduct", productController.editProduct);

module.exports = router;
