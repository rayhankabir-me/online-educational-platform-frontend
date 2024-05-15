// "use client"

// import Link from "next/link";
// import axios from "axios";
// import { useEffect, useState } from "react";

// interface Cart {
//   course_id: number;
//   category_id: number;
//   no_of_items: number;
//   price: number;
//   created_by: {
//     username: string;
//   };
// }

// const CartItem = () => {
//   const [carts, setCarts] = useState<Cart[]>([]);

//   useEffect(() => {
//     const fetchCarts = async () => {
//       try {
//         const response = await axios.get("http://localhost:3000/cart/forMe", {
//           headers: {
//             Authorization: "Bearer " + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im1yaXR0aWthIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNzE1NzE1NTg4LCJleHAiOjE3MTU3MTkxODh9.jH4RmgWjedN-b_JNdUJTtD9fyyB5IFvEM0nIDtPt8DQ",
//           },
//         });
//         setCarts(response.data);
//       } catch (error) {
//         console.error("Error while fetching carts:", error);
//       }
//     };

//     fetchCarts();
//   }, []);

// return (
//   <>
//     {carts.map((cart) => (
//       <div className="flex justify-center" key={cart.course_id}>
//         <div className="max-w-sm w-full sm:w-1/2 lg:w-1/3 px-4 pb-8">
//           <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
//             <div className="p-5">
//               <h5 className="mb-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
//                 Course ID: {cart.course_id}
//               </h5>
//               <div className="text-sm mb-4 flex items-center justify-between">
//                 <p className="text-gray-700 dark:text-gray-400">
//                   No of Items:{" "}
//                   <span className="font-semibold text-gray-900 dark:text-white">
//                     {cart.no_of_items}
//                   </span>
//                 </p>
//               </div>
//               <div className="text-sm mb-4 flex items-center justify-between">
//                 <p className="text-gray-700 dark:text-gray-400">
//                   Price:{" "}
//                   <span className="font-semibold text-gray-900 dark:text-white">
//                     {cart.price}
//                   </span>
//                 </p>
//                 <p className="text-gray-700 dark:text-gray-400">
//                   Created by:{" "}
//                   <span className="font-semibold text-gray-900 dark:text-white">
//                     {cart.created_by.username}
//                   </span>
//                 </p>
//               </div>
//               <div className="flex items-center justify-between">
//                 <a href={`/courses/${cart.course_id}`}>
//                   <a className="inline-flex items-center font-medium text-blue-600 hover:text-blue-800 dark:text-blue-500 dark:hover:text-blue-700">
//                     View Course
//                     <svg
//                       className="w-2.5 h-2.5 ms-2 rtl:rotate-180"
//                       aria-hidden="true"
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="none"
//                       viewBox="0 0 6 10"
//                     >
//                       <path
//                         stroke="currentColor"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth="2"
//                         d="m1 9 4-4-4-4"
//                       />
//                     </svg>
//                   </a>
//                 </a>
//               </div>
//             </div>
//           </div>
          
//         </div>
//       </div>
//     ))}
//   </>
// );
// };

// export default CartItem;

'use client'
import axios from "axios";
import { useState, useEffect } from "react";
import bg from "../../../public/book.png";
import Image from "next/image";

function CartItem() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/cart");
        setCart(response.data);
      } catch (error) {
        console.error("Error fetching cart items:", error);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (course_id) => {
    try {
      await axios.delete(`http://localhost:3000/cart/${course_id}`);
      setCart(cart.filter((item) => item.course_id !== course_id));
    } catch (error) {
      console.error("Error deleting cart item:", error);
    }
  };

  const handleUpdate = async (course_id, newNoOfItems) => {
    try {
      await axios.patch(`http://localhost:3000/cart/${course_id}`, {
        no_of_items: newNoOfItems,
      });
      setCart((prevCart) =>prevCart.map((item) =>item.course_id === course_id ? { ...item, no_of_items: newNoOfItems } : item)
      );
    } catch (error) {
      console.error("Error updating cart item:", error);
    }
  };

  return (
    <div className="flex justify-center items-center h-full">
      <table className="min-w-full divide-y divide-gray-200 py-3">
        <thead>
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider rounded-tl-lg">
              Course id
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Number of items
            </th>
            <th className="px-8 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider rounded-tr-lg">
              Price
            </th>
            <th className="px-8 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider rounded-tr-lg">
              Created By
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider rounded-tr-lg">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item, index) => (
            <tr key={index} className="bg-black divide-y divide-gray-200">
              <td className="px-6 py-4 whitespace-nowrap">{item.course_id}</td>
              <td className="px-6 py-4 whitespace-nowrap">{item.no_of_items}</td>
              <td className="px-6 py-4 whitespace-nowrap">{item.price}</td>
              <td className="px-6 py-4 whitespace-nowrap">{item.created_by.username}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <button
                  onClick={() => handleUpdate(item.course_id, item.no_of_items + 1)}
                  className="text-blue-500 hover:text-blue-700 mr-2"
                >
                  Update (+)
                </button>
                <button
                  onClick={() => handleUpdate(item.course_id, item.no_of_items - 1)}
                  className="text-blue-500 hover:text-blue-700"
                >
                  (-)
                </button>
                <div></div>
                <button
                  onClick={() => handleDelete(item.course_id)}
                  className="text-red-500 hover:text-red-700 ml-2"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CartItem;


