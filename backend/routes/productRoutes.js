import express from 'express';
/*import {isAuthenticated, isAdmin} from '../middlewares/authorizeMiddleware.js';*/
import {createProduct, getAllProducts, deleteProduct, updateProduct, getSingleProduct} from '../controllers/productController.js';
import upload from '../middlewares/multerMiddleware.js';

const router = express.Router();

/************************* routes *************************/
router.post('/create-product', upload.fields({name: 'image1, maxCount:1'}), createProduct);
router.put('/update-product/:productId',  updateProduct);
router.delete('/delete-product/:productId', deleteProduct);
router.get('/get-all-products', getAllProducts);
router.get('/get-product/:productId', getSingleProduct);

export default router;