import {v2 as cloudinary} from 'cloudinary';

export async function uploadImageFileUtil(file) {
   const cloudinaryResult = await cloudinary.uploader.upload(file, {
      folder: 'mern-ecom-store',
      resource_type: 'auto'});

   return {public_id: cloudinaryResult.public_id, url: cloudinaryResult.secure_url};

}