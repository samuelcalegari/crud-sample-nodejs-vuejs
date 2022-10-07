//import express
import express from "express";

//import middleware
import auth from "../middleware/auth.js"

//import functions from controller
import {
    showProducts,
    showProductsById,
    createProduct,
    updateProduct,
    deleteProduct

} from "../controllers/product.js"

import {
    getToken, refreshToken
} from "../controllers/auth.js"

//init express router
const router =  express.Router();

//get all product
router.get("/products", auth, showProducts);

//get single product
router.get("/products/:id", auth, showProductsById);

//create new product
router.post("/products", auth, createProduct);

//update product
router.put("/products/:id", auth, updateProduct);

//delete product
router.delete("/products/:id", auth, deleteProduct);

//get token
router.post("/token", getToken);

//refresh token
router.post("/refresh", refreshToken);

//export default router
export default router;
