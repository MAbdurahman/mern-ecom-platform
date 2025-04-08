import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from "axios";
import { useSnackbar } from 'notistack';


export default function EditProductPage() {
   const [productName, setProductName] = useState('');
   const [productPrice, setProductPrice] = useState('');
   const [productDescription, setProductDescription] = useState('');
   const [productCategory, setProductCategory] = useState('');
   const [loading, setLoading] = useState(false);

   const navigate = useNavigate();
   const { productId } = useParams();
   const { enqueueSnackbar } = useSnackbar();

   const token = localStorage.getItem('ecom_platform');

   const config = {
      headers: {
         'Authorization': `Bearer ${token}`,
         'Content-Type': 'application/json'
      }
   };

   useEffect(() => {
      setLoading(true);
      axios
         .get(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/products/get-product/${productId}`)
         .then((response) => {
            setProductName(response.data.productName);
            setProductPrice(response.data.price);
            setProductDescription(response.data.description);
            setProductCategory(response.data.category);
            setLoading(false);
         })
         .catch((err) => {
            setLoading(false);
            console.log('Editing Product Error: ', err.message);
            alert(`Editing Product Error: ${err.message}`);
         });
   }, [productId]);

   function handleEditProduct() {
      const data = { productName, productDescription, productPrice, productCategory };
      setLoading(true);
      axios
         .put(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/products/update-product/${id}`, data, config)
         .then(() => {
            setLoading(false);
            enqueueSnackbar('Product edited successfully!', {variant: 'success'});
            navigate('/admin');
         })
         .catch((err) => {
            setLoading(false);
            enqueueSnackbar('Error editing product', {variant: 'error'});
            console.log(`Editing Product Error: ${err.message}`);
         });
   }

   return (
      <div className='p-6 bg-base-100 flex justify-center items-center'>
         {/*{loading && <Spinner/>}*/}
         <div className='container max-w-lg shadow-lg rounded-lg p-5 bg-base-200'>
            <Link to="/admin" className='flex justify-center items-center
            btn mb-4 w-16 py-1 px-4 tracking-wider uppercase text-sm rounded-xl'>Back</Link>
            <h2 className='text-2xl font-semibold my-4 text-center uppercase'>Edit Product</h2>
            <div className='my-4'>
               <label htmlFor="productName" className='block text-md  mb-2'>Product Name</label>
               <input
                  id="productName"
                  type="text"
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                  className='border border-base-300 px-4 py-2 w-full rounded-md'
               />
               <label htmlFor="productDescription" className='block text-md  mb-2'>Product Description</label>
               <input
                  id="productDescription"
                  type="text"
                  value={productDescription}
                  onChange={(e) => setProductDescription(e.target.value)}
                  className='border border-base-300 px-4 py-2 w-full rounded-md'
               />

               <label htmlFor="productPrice" className='block text-md  mb-2'>
                  Product Price
               </label>
               <input
                  id="productPrice"
                  type="number"
                  value={productPrice}
                  onChange={(e) => setProductPrice(e.target.value)}
                  className='border border-base-300 px-4 py-2 w-full rounded-md'
               />

               <label htmlFor='productCategory' className='block text-lg mb-2 mt-4'>
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

               <button onClick={handleEditProduct} className='w-full uppercase font-semibold bg-success
                                hover:bg-green-700 cursor-pointer text-success-content py-2 px-4 rounded-md mt-4'>
                  Save Changes
               </button>
            </div>
         </div>
      </div>

   );
}