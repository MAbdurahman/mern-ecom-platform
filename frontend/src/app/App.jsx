import React, {Fragment} from 'react';
import {Routes, Route, useLocation} from 'react-router-dom';
import ProtectedRoute from '../components/ProtectedRoute.jsx';
import AdminPage from '../pages/AdminPage.jsx';
import DeleteProductPage from '../pages/DeleteProductPage.jsx';
import EditProductPage from '../pages/EditProductPage.jsx';
import CreateProductPage from '../pages/CreateProductPage.jsx';


export default function App() {
   const location = useLocation();

   return (
      <Fragment>
         <Routes>
            <Route
               path={'/admin/*'}
               element={
                  <ProtectedRoute>
                     <AdminRoutes/>
                  </ProtectedRoute>}/>
         </Routes>
      </Fragment>

   );
}

const AdminRoutes = () => {
   return (
      <Routes>
         <Route path={'/'} element={<AdminPage/>}/>
         <Route path="/products/create-product" element={<CreateProductPage/>} />
         <Route path="/products/update-product/:productId" element={<EditProductPage/>} />
         <Route path="/products/delete-product/:productId" element={<DeleteProductPage/>} />
      </Routes>
   );
};