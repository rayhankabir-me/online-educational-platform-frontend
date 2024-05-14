'use client'
import axios from 'axios';
import React, { useState } from 'react';


export default function CreateReview() {
  const [Description, setDescription] = useState(" ");
 
  const saveclick = async () => {
    try {
      await axios.post("http://localhost:3000/coursereview/create", {
        Description,
       
      });
      alert("Successfully Review Submited!");
    } catch (error) {
      
      console.error("Error while saving:", error);
      
    }
  };
  return (
    <form>
      <div className="grid gap-6 mb-6 md:grid-cols-2">
        <div>
          <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Review</label>
          <input type ="text"onChange={(e) => setDescription(e.target.value)} value={Description} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
        </div>
        
      </div>
      
      <button type="submit" onClick={saveclick} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
    </form>
    
  );
}
