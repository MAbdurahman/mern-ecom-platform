import React from 'react';


export default function SpinnerComponent() {

   return (
      <div className="flex justify-center items-center min-h-screen">
         <div className="w-16 h-16 border-4 border-solid rounded-full animate-spin
                    border-primary border-t-transparent">
         </div>
      </div>

   );
}