/************************* imports *************************/
import bodyParser from 'body-parser';
import colors from 'colors';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';

/************************* setup config file *************************/
if (process.env.NODE_ENV !== 'production') {
   dotenv.config({path: 'backend/config/config.env'})
}

/************************* variables *************************/
const app = express();
colors.enabled = true;

/************************* middlewares *************************/
if (process.env.NODE_ENV === 'development') {
   app.use(morgan('dev'));
}
app.use(helmet());
app.use(
   cors({
      origin: "http://localhost:5173",
      methods: ["GET", "POST", "DELETE", "PUT"],
      allowedHeaders: [
         "Content-Type",
         "Authorization",
         "Cache-Control",
         "Expires",
         "Pragma",
      ],
      credentials: true,
   })
);
/*app.use(bodyParser.json({limit: '100mb'}));
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
   limit: '100mb',
   extended: true
}));*/
app.use(cookieParser());
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

/************************* import all routes *************************/
/*import homeRoute from '../routes/homeRoute.js';
import authRoutes from '../routes/authRoutes.js';
import adminProductRoutes from '../routes/admin/adminProductsRoutes.js';
import adminOrderRoutes from '../routes/admin/adminOrderRoutes.js';*/
/*import userRoutes from '../routes/userRoutes.js';*/
/*import commonRoutes from '../routes/commonRoutes.js';*/

import homeRoute from '../routes/homePageRoute.js';
import productRoutes from '../routes/productRoutes.js';

/****************************** routes ******************************/
app.use('/api/v1.0/', homeRoute);
app.use('/api/v1.0/products', productRoutes);
/*app.use('/api/v1.0/auth', authRoutes);

app.use('/api/v1.0/admin/products', adminProductRoutes);
app.use('/api/v1.0/admin/orders', adminOrderRoutes);*/


export default app;