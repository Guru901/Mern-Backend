const productModel = require("../db/models/productModel");
let localProduct;

const addProduct = async (req, res) => {
  try {
    const product = await productModel.findOne({
      productName: req.body.productName,
    });

    if (!product) {
      const newProduct = new productModel({
        img: req.body.img,
        companyName: req.body.companyName,
        productName: req.body.productName,
        price: req.body.price,
        discountedPrice: req.body.discountedPrice,
        discount: req.body.discount,
        category: req.body.category,
      });

      await newProduct.save();
      res.status(201).json({ msg: "Product created successfully" });
    } else {
      res.status(400).json({ msg: "Product already exists" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Something Went Wrong" });
  }
};

const getAllProducts = async (req, res) => {
  try {
    const products = await productModel.find({});
    res.json(products);
  } catch (error) {
    res.status(500).json({ msg: "Some error occurred" });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const product = await productModel.findOne({
      productName: req.body.productName,
      companyName: req.body.companyName,
    });

    if (!product) {
      return res.status(404).json({ msg: "Product not found" });
    }

    await product.deleteOne();
    res.status(200).json({ msg: "Product deleted successfully" });
  } catch (error) {
    console.error("Error deleting product:", error);
    res.status(500).json({ msg: "Internal Server Error" });
  }
};

const editProductSend = async (req, res) => {
  try {
    const product = await productModel.findOne(req.body);
    localProduct = product;
    res.send(localProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Internal Server Error" });
  }
};

const editProduct = async (req, res) => {
  try {
    const updatedProduct = await productModel.updateOne(
      {
        productName: localProduct.productName,
      },
      {
        $set: {
          productName: req.body.productName,
          companyName: req.body.companyName,
          category: req.body.category,
          price: req.body.price,
          discountedPrice: req.body.discountedPrice,
          discount: req.body.discount,
          img: req.body.img,
        },
      },
      { new: true }
    );
    res.status(200).json({ msg: "Product Updated Successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Internal Server Error" });
  }
};

module.exports = {
  addProduct,
  getAllProducts,
  deleteProduct,
  editProductSend,
  editProduct,
};
