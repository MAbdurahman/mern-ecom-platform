import Product from '../models/productModel.js';
import cloudinary from '../config/cloudinaryConfig.js';
import {messageHandler} from '../utils/functionsUtil.js';

export const createProduct = async (req, res, next) => {
   const {productName, description, price, image, category} = req.body;

   try {
      const result = await cloudinary.uploader.upload(image, {
         folder: 'mern-ecom-platform/products',
         resource_type: 'image',
      })

      const newProduct = await Product.create({
         productName,
         description,
         price,
         image: {
            public_id: result.public_id,
            url: result.secure_url
         },
         category,

      });

      res.status(201).json({
         message: 'Product created successfully!',
         success: true,
         newProduct
      })

   } catch(err) {
      console.error('Error creating a product: ', err.message);
      next(messageHandler(res, 'Error creating a product: ' + err.message, false, 500));
   }

}

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
      next(messageHandler(res, 'Error retrieving all products: ' + err.message, false, 500));
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