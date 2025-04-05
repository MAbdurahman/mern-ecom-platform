import React, {Fragment} from 'react';
import {Routes, Route, useLocation} from 'react-router-dom';
import ProtectedRoute from '../components/ProtectedRoute.jsx';
import AdminPage from '../pages/AdminPage.jsx';


export default function App() {
   const location = useLocation();

   return (
      <Fragment>
         <Routes>
            <Route
               path={'/admin/*'}
               element={
                  <ProtectedRoute>
                     <AdminPage/>
                  </ProtectedRoute>}/>
         </Routes>
      </Fragment>

   );
}

const AdminRoutes = () => {
   return (
      <Routes>
         <Route path={'/'} element={<AdminPage/>}/>
         {/*<Route path="/" element={<Admin/>} />
         <Route path="/product/create" element={<CreateProduct/>} />
         <Route path="/product/edit/:id" element={<EditProduct/>} />
         <Route path="/product/delete/:id" element={<DeleteProduct/>} />*/}
      </Routes>
   );
};