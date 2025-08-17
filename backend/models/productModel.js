/************************* imports *************************/
import {model, Schema} from 'mongoose';

const productSchema = new Schema({
      productName: {
         type: String,
         trim: true,
         required: [true, 'Product name is required!'],
         maxlength: [100, 'Product name cannot be more than 100'],
      },
      description: {
         type: String,
         trim: true,
         required: [true, 'Product description is required']
      },
      price: {
         type: Number,
         trim: true,
         required: [true, 'Product price is required'],
         maxlength: [6, 'Product price cannot be more than 6 characters!'],
         default: 0.00,
      },
      images: [{
         public_id: {
            type: String,
            required: true
         },
         url: {
            type: String,
            required: true
         }
      }],
      category: {
         type: String,
         required: [true, 'Select a category for the product'],
         enum: ['course', 'template']
      },
      user: {
         type: Schema.Types.ObjectId,
         required: true,
         ref: 'User'
      },
      createdAt: {
         type: Date,
         default: Date.now
      }
   },
   {timestamps: true}
);

const Product = new model('Product', productSchema);
export default Product;