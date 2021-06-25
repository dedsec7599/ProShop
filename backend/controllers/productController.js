import asyncHandler from "express-async-handler";
//In the previous MERN stack project, we made try-catch instances for each route, Async handler solves that problem so we have used it here. It report error if their is an error in server for any route

import Product from "../models/productModel.js";

//@desc     Fetch all products
//@route    GET /api/products
//@access   Public
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});

  res.json(products);
});

//@desc     Fetch product by id
//@route    GET /api/products
//@access   Public
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

export { getProducts, getProductById };
