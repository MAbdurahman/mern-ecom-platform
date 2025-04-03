/************************* imports *************************/
import {model, Schema} from 'mongoose';

const productSchema = new Schema({
      productName: {
         type: String,
         trim: true,
         required: [true, 'Product name is required!']
      },
      description: {
         type: String,
         trim: true,
         required: [true, 'Product description is required']
      },
      price: {
         type: Number,
         trim: true,
         required: [true, 'Product price is required']
      },
      image: {
         public_id: {
            type: String,
            required: true
         },
         url: {
            type: String,
            required: true
         }
      },
      category: {
         type: String,
         required: true,
         enum: ['course', 'template']
      }
   },
   {timestamps: true}
);

const Product = new model('Product', productSchema);
export default Product;