import express from 'express';
/*import {isAuthenticated, isAdmin} from '../middlewares/authorizeMiddleware.js';*/
import {createProduct, getAllProducts, deleteProduct, updateProduct, getSingleProduct} from '../controllers/productController.js';

const router = express.Router();

/************************* routes *************************/
router.post('/create-product', createProduct);
router.put('/update-product/:productId',  updateProduct);
router.delete('/delete-product/:productId', deleteProduct);
router.get('/get-all-products', getAllProducts);
router.get('/get-product/:productId', getSingleProduct);

export default router;