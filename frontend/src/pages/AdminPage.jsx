import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import { FaRegEdit } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";


export default function AdminPage() {
   const [product, setProduct] = useState([]);
   const [loading, setLoading] = useState(false);

   useEffect(() => {
      setLoading(true);
      axios
         .get(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/products/get-all-products`)
         .then((response) => {
            setProduct(response.data.data);

            setLoading(false);
         })
         .catch((err) => {
            console.log('Error getting products', err.message);
            setLoading(false);
         });

   },[])

   return (
      <div className="px-4 py-8 max-w-7xl bg-base-200 mx-auto" >
         <div className="overflow-x-auto">
            <table className="table">
               <thead>
               <tr>
                  <th>
                     <Link to="/admin/products/create-product"
                           className='font-semibold uppercase bg-neutral-800 hover:bg-neutral-900 py-2 px-4 rounded-lg
                                  shadow-md text-base-100'>
                        Add Product
                     </Link>
                  </th>
                  <th>Product Name</th>
                  <th>Description</th>
                  <th>Price</th>
                  <th>Category</th>
               </tr>
               </thead>
               <tbody>
               {/*{product.map((product, index) => (
                  <tr key={product._id} className='bg-base-100 hover:bg-base-300'>
                     <td>
                        <div className="avatar">
                           <div className="mask mask-squircle w-12 h-12">
                              <img src={product.image} alt={product.productName} />
                           </div>
                        </div>
                     </td>
                     <td className='py-3 px-5'>{product.productName}</td>
                     <td className='py-3 px-5'>{product.description}</td>
                     <td className='py-3 px-5'>{product.price}</td>
                     <td className='py-3 px-5'>{product.category}</td>
                     <td className='py-3 px-5'>
                        <div className='flex justify-center gap-x-1'>
                           <Link to={`/admin/products/update-product/${product._id}`} className='bg-orange-500 hover:bg-orange-900
                     text-white py-2 px-4 font-medium rounded-l-lg text-sm'><FaRegEdit /></Link>

                           <Link to={`/admin/products/delete-product/${product._id}`} className='bg-red-500 hover:bg-red-900
                     text-white py-2 px-4 font-medium rounded-r-lg text-sm'><FaRegTrashCan /></Link>
                        </div>
                     </td>
                  </tr>
               ))}*/}
               </tbody>

            </table>
         </div>
      </div>

   );
}