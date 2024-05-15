"use client";

import axios from "axios";
import { useEffect, useState } from "react";

function CartItem() {
  const [cart, setCart] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/cart");
        setCart(response.data);
      } catch (error) {
        console.error("Error fetching cart items:", error);
        setError("Failed to fetch cart items.");
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
      setError("Failed to delete cart item.");
    }
  };

  const handleUpdate = async (course_id, newNoOfItems) => {
    if (newNoOfItems < 0) {
      setError("Number of items cannot be negative.");
      return;
    }

    try {
      await axios.patch(`http://localhost:3000/cart/${course_id}`, {
        no_of_items: newNoOfItems,
      });
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.course_id === course_id
            ? { ...item, no_of_items: newNoOfItems }
            : item
        )
      );
      setError(null); // Clear any previous errors
    } catch (error) {
      console.error("Error updating cart item:", error);
      setError("Failed to update cart item.");
    }
  };

  return (
    <div className="flex justify-center items-center h-full p-4">
      {error && <div className="mb-4 text-red-500">{error}</div>}
      <table className="min-w-full divide-y divide-gray-200 bg-white shadow-md rounded-lg">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Course ID
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Number of Items
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Price
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Created By
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {cart.map((item) => (
            <tr key={item.course_id} className="bg-white">
              <td className="px-6 py-4 whitespace-nowrap">{item.course_id}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                {item.no_of_items}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">{item.price}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                {item.created_by.username}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <button
                  onClick={() =>
                    handleUpdate(item.course_id, item.no_of_items + 1)
                  }
                  className="text-blue-500 hover:text-blue-700 mr-2"
                >
                  Update +
                </button>
                <button
                  onClick={() =>
                    handleUpdate(item.course_id, item.no_of_items - 1)
                  }
                  className="text-blue-500 hover:text-blue-700"
                >
                  -
                </button>
                <button
                  onClick={() => handleDelete(item.course_id)}
                  className="text-red-500 hover:text-red-700 ml-2"
                >
                  Delete x
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
