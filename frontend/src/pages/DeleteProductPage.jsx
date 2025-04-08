import React, { useState } from 'react';
import axios from "axios";
import { useSnackbar } from "notistack";
import { Link, useNavigate, useParams } from 'react-router-dom';



export default function DeleteProductPage() {
   const [loading, setLoading] = useState(false);
   const navigate = useNavigate();
   const { productId } = useParams();
   const { enqueueSnackbar } = useSnackbar();

   const token = localStorage.getItem('token');

   const config = {
      headers: {
         'Authorization': `Bearer ${token}`,
         'Content-Type': 'application/json'
      }
   };

   const handleDeleteProduct = () => {
      setLoading(true);

      axios
         .delete(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/products/delete-product/${productId}`, config)
         .then(() => {
            setLoading(false);
            enqueueSnackbar('Product Deleted', { variant: 'success' });
            navigate('/admin');
         })
         .catch((err) => {
            setLoading(false);
            enqueueSnackbar('Error deleting product', { variant: 'error' });
            console.log(`Error deleting product: ${err.message}`);
         })
   }

   return (
      <div className='p-6 bg-base-100 flex justify-center items-center'>
         {/*{loading && <Spinner/>}*/}
         <div className='container max-w-lg shadow-lg p-5'>
            <Link to="/admin" className='flex justify-center items-center mb-4 w-16 py-1 px-4
                                          btn uppercase text-sm rounded-xl'>
               Back
            </Link>
            <h2 className='text-2xl mb-4 font-semibold '>
               Are you sure you want to delete this product?
            </h2>
            <button onClick={handleDeleteProduct} className='bg-error text-error-content font-semibold tracking-wider
                                                                py-2 px-4 rounded-lg w-full'>
               Yes, delete product
            </button>
         </div>
      </div>

   );
}