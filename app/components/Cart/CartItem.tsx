"use client"

import Link from "next/link";
import axios from "axios";
import { useEffect, useState } from "react";

interface Cart {
  course_id: number;
  category_id: number;
  no_of_items: number;
  price: number;
  created_by: {
    username: string;
  };
}

const CartItem = () => {
  const [carts, setCarts] = useState<Cart[]>([]);

  useEffect(() => {
    const fetchCarts = async () => {
      try {
        const response = await axios.get("http://localhost:3000/cart/forMe", {
          headers: {
            Authorization: "Bearer " + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im1yaXR0aWthIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNzE1Njk5Njc0LCJleHAiOjE3MTU3MDMyNzR9.oRsBcHVWno2xDJj9ZsoF1r4Tz3BsX9jWo-4cPZVmzAg",
          },
        });
        setCarts(response.data);
      } catch (error) {
        console.error("Error while fetching carts:", error);
      }
    };

    fetchCarts();
  }, []);

  return (
    <>
      {carts.map((cart) => (
        <div key={cart.course_id} className="max-w-sm w-full sm:w-1/2 lg:w-1/3 px-4 pb-8">
          <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="p-5">
              <h5 className="mb-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Course ID: {cart.course_id}
              </h5>
              <div className="text-sm mb-4 flex items-center justify-between">
                {/* <p className="text-gray-700 dark:text-gray-400">
                  Category ID:{" "}
                  <span className="font-semibold text-gray-900 dark:text-white">
                    {cart.category_id}
                  </span>
                </p> */}
                <p className="text-gray-700 dark:text-gray-400">
                  No of Items:{" "}
                  <span className="font-semibold text-gray-900 dark:text-white">
                    {cart.no_of_items}
                  </span>
                </p>
              </div>
              <div className="text-sm mb-4 flex items-center justify-between">
                <p className="text-gray-700 dark:text-gray-400">
                  Price:{" "}
                  <span className="font-semibold text-gray-900 dark:text-white">
                    {cart.price}
                  </span>
                </p>
                <p className="text-gray-700 dark:text-gray-400">
                  Created by:{" "}
                  <span className="font-semibold text-gray-900 dark:text-white">
                    {cart.created_by.username}
                  </span>
                </p>
              </div>
              <div className="flex items-center justify-between">
                {/* <Link href={`/courses/${cart.course_id}`}>
                  <a className="inline-flex items-center font-medium text-blue-600 hover:text-blue-800 dark:text-blue-500 dark:hover:text-blue-700">
                    View Course
                    <svg
                      className="w-2.5 h-2.5 ms-2 rtl:rotate-180"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 6 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 9 4-4-4-4"
                      />
                    </svg>
                  </a>
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default CartItem;
