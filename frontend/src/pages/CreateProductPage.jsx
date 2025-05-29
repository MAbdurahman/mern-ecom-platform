import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import axios from "axios";
import { useSnackbar } from 'notistack';
import Spinner from '../components/SpinnerComponent.jsx';

export default function CreateProductPage() {
   const [productName, setProductName] = useState('');
   const [productPrice, setProductPrice] = useState('');
   const [productCategory, setProductCategory] = useState('');
   const [productDescription, setProductDescription] = useState('');
   const [image, setImage] = useState(null);

   const [imagePreview, setImagePreview] = useState(null);

   const [loading, setLoading] = useState(false);

   const navigate = useNavigate();
   const { enqueueSnackbar } = useSnackbar();

   const token = localStorage.getItem('token');

   const config = {
      headers: {
         'Authorization': `Bearer ${token}`,
         'Content-Type': 'application/json'
      }
   };


   function handleFileChange(e) {
      const selectedFile = e.target.files[0];
      setImage(selectedFile);

   }

   async function handleUploadedFile() {
      console.log('handleUploadedFile');
   }

   async function handleCreateProduct() {
      console.log('handleCreateProduct');
   }


   return (
      <div className='p-6 bg-base-100 flex justify-center items-center'>
         {/*{loading && <Spinner/>}*/}
         <div className='container max-w-lg shadow-lg rounded-lg p-5 bg-base-100'>
            <Link to="/admin" className='flex justify-center items-center
            btn mb-4 w-16 py-1 px-4 tracking-wider uppercase text-sm rounded-xl'>Back</Link>
            <h2 className='text-2xl font-semibold my-4 text-center uppercase'>Create Product</h2>
            <div className='my-4'>
               <label htmlFor="productName" className='block text-md mb-2 font-medium'>Product Name</label>
               <input
                  id="productName"
                  type="text"
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                  className='border border-base-300 px-4 py-2 w-full rounded-md'
               />

               <label htmlFor="productDescription" className='block text-md mb-2 font-medium'>Product Description</label>
               <input
                  id="productDescription"
                  type="text"
                  value={productDescription}
                  onChange={(e) => setProductDescription(e.target.value)}
                  className='border border-base-300 px-4 py-2 w-full rounded-md'
               />

               <label htmlFor="productPrice" className='block text-md  mb-2 font-medium'>
                  Product Price
               </label>
               <input
                  id="productPrice"
                  type="number"
                  value={productPrice}
                  onChange={(e) => setProductPrice(e.target.value)}
                  className='border border-base-300 px-4 py-2 w-full rounded-md'
               />

               <label htmlFor='productCategory' className='block text-md mb-2 mt-4 font-medium'>
                  Product Category
               </label>
               <select
                  id="productCategory"
                  value={productCategory}
                  onChange={(e) => setProductCategory(e.target.value)}
                  className='w-full border border-base-300 px-4 py-2 rounded-md'
                  required
               >
                  <option value="" disabled>Select category</option>
                  <option value="course">Course</option>
                  <option value="template">Template</option>
               </select>

               <label htmlFor='image' className='block text-lg  mb-2'>Upload Image</label>
               <input
                  id="image"
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className='w-full border border-base-300 px-4 py-2 rounded-md'
                  required
               />

               {imagePreview && (
                  <div className='my-4'>
                     <img src={imagePreview} alt="Preview" className='max-w-full h-auto' />
                  </div>
               )}


               <button onClick={handleCreateProduct} className='w-full uppercase font-semibold bg-success
                                hover:bg-green-700 cursor-pointer text-success-content py-2 px-4 rounded-md mt-4'>
                  Create Product
               </button>
            </div>
         </div>
      </div>
   );
}