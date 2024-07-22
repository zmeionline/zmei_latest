// import React from "react";

// function Modal({ isOpen, onClose, handleReadMoreClick }) {
//   if (!isOpen) {
//     return null;
//   }

//   const handleAccept = () => {
//     onClose(); // Inchide modalul
//   };

//   return (
//     <div className="fixed inset-x-0 bottom-0h-full w-full bg-cyan-500 bg-clip-padding backdrop-filter  backdrop-blur bg-opacity-50 saturate-100 backdrop-contrast-100 flex justify-center items-end z-50">
//       <div className="bg-white px-6 py-4 rounded-t-md shadow-md w-full max-w-lg">
//         <p className="text-base">
//           By accessing and placing an order with Zmei, you confirm that you are
//           in agreement with and bound by the terms of service contained in the
//           Terms & Conditions outlined below. These terms apply to the entire
//           website and any email or other type of communication between you and
//           Zmei.
//         </p>
//         <p
//           className="underline cursor-pointer mt-2"
//           onClick={handleReadMoreClick}
//         >
//           read more
//         </p>
//         <div className="flex justify-end mt-4">
//           <button
//             type="button"
//             className="px-4 py-2 mr-4 rounded-md bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
//             onClick={handleAccept}
//           >
//             Accept
//           </button>
//           <button
//             type="button"
//             className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
//             onClick={onClose}
//           >
//             Decline
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Modal;

// import React from "react";

// function Modal({ isOpen, onClose, handleReadMoreClick }) {
//   if (!isOpen) {
//     return null;
//   }

//   const handleAccept = () => {
//     onClose(); // Închide modalul
//   };

//   return (
//     <div className="fixed inset-x-0 bottom-0 w-full bg-transparent flex justify-center items-end z-50">
//       {/* Fundalul modalului cu efect de sticlă */}
//       <div className="bg-white bg-opacity-40 backdrop-filter backdrop-blur-lg px-6 py-4 w-full mr-20 ml-20 mb-6 rounded-md">
//         <p className="text-base text-slate-900">
//           By accessing and placing an order with Zmei, you confirm that you are
//           in agreement with and bound by the terms of service contained in the
//           Terms & Conditions outlined below. These terms apply to the entire
//           website and any email or other type of communication between you and
//           Zmei.
//         </p>
//         <p
//           className="underline cursor-pointer mt-2 text-slate"
//           onClick={handleReadMoreClick}
//         >
//           read more
//         </p>
//         <div className="flex  mt-4">
//           <button
//             type="button"
//             className="px-4 py-2 mr-4 rounded-md bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
//             onClick={handleAccept}
//           >
//             Accept
//           </button>
//           <button
//             type="button"
//             className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
//             onClick={onClose}
//           >
//             Decline
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Modal;

import React from "react";

function Modal({ isOpen, onClose, handleReadMoreClick }) {
  if (!isOpen) {
    return null;
  }

  const handleAccept = () => {
    onClose(); // Închide modalul
  };

  return (
    <div className="fixed inset-x-0 bottom-0 w-full bg-transparent flex justify-center items-end z-50">
      {/* Fundalul modalului cu efect de sticlă */}
      <div className="bg-blue-900 bg-opacity-40 backdrop-filter backdrop-blur-lg px-6 py-4 w-full mr-20 ml-20 mb-6 rounded-md">
        <p className="text-base text-gray-900">
          By accessing and placing an order with Zmei, you confirm that you are
          in agreement with and bound by the terms of service contained in the
          Terms & Conditions outlined below. These terms apply to the entire
          website and any email or other type of communication between you and
          Zmei.
        </p>
        <p
          className="underline cursor-pointer mt-2 text-slate"
          onClick={handleReadMoreClick}
        >
          read more
        </p>
        <div className="flex  mt-4">
          <button
            type="button"
            className="px-4 py-2 mr-4 rounded-md bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            onClick={handleAccept}
          >
            Accept
          </button>
          <button
            type="button"
            className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            onClick={onClose}
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
