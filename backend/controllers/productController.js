import Product from '../models/productModel.js';
import cloudinary from '../config/cloudinaryConfig.js';
import ErrorHandler from '../utils/errorHandlerUtil.js';
import asyncHandler from '../utils/asyncHandlerUtil.js';

export const createProduct = asyncHandler(async (req, res, next) => {
   const {productName, description, price, image, category} = req.body;

   if (!req.body.productName || !req.body.price || !req.body.image || !req.body.category) {
      return next(new ErrorHandler('Product missing fields are required!', 400));
   }

      try {
      const result = await cloudinary.uploader.upload(image, {
         folder: 'mern-ecom-platform/products',
         resource_type: 'image',
      })

      const newProduct = await Product.create({
         productName,
         description,
         price,
         image: [
            {public_id: result.public_id},
            {url: result.secure_url}
         ],
         category,

      });

      res.status(201).json({
         message: 'Product created successfully!',
         success: true,
         newProduct
      })

   } catch(err) {
      console.error('Error creating a product: ', err.message);
      next(new ErrorHandler(err.message, err.statusCode));
   }
});

export const getAllProducts = async function (req, res, next) {
   try {
      const productList = await Product.find({});

      res.status(200).json({
         message: 'All products have been retrieved!',
         success: true,
         productList
      })
   } catch(err) {
      console.error('Error retrieving all products: ', err.message);
      next(new ErrorHandler(err.message, err.statusCode));
   }
}

export const getSingleProduct = async (req, res, next) => {
   res.status(200).json({
      message: 'Product with id is retrieved!',
      success: true,
      data: {}
   })
}

export const updateProduct = async (req, res, next) => {
   res.status(200).json({
      message: 'Product with id is updated!',
      success: true,
      data: {}
   })

}

export const deleteProduct = async (req, res, next) => {
   res.status(200).json({
      message: 'Product with id is deleted!',
      success: true,
      data: {}
   })
}