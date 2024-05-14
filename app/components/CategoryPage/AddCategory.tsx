import axios from 'axios';
import { headers } from 'next/headers';
import React, { useEffect, useState } from 'react'

const AddCategory = ({editCategory, setReload}) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if(!editCategory || !editCategory.id) return;

    setName(editCategory.category_name);
    setDescription(editCategory.description);
    setImage(editCategory.image);

  }, [editCategory]);
  
  const handleImageInput = (e:any) => {}

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    setError("");
    if (!name){
        setError("Please enter category name");
        return 
    }
    if (!description){
        setError("Please enter your description");
        return
    }

    const url = editCategory?.id ? "http://localhost:3000/categories/"+editCategory?.id: "http://localhost:3000/categories/create"
    const reqBody = {
    description:description,
    image_url:"abc",
    category_name:name
    }
    const config = {
        headers: {
            //nije likh token from postman after logging in
            Authorization: "Bearer " + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im1yaXR0aWthIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNzE1Njk5Njc0LCJleHAiOjE3MTU3MDMyNzR9.oRsBcHVWno2xDJj9ZsoF1r4Tz3BsX9jWo-4cPZVmzAg"
        }
    }
    try {
        if(editCategory?.id)
            {
                const res = await axios.patch(url, reqBody, config);
                console.log(res);
                setName("");
                setDescription("");
                setImage("");
                setReload(oldValue => oldValue+1);
            }
            else{
                const res = await axios.post(url, reqBody, config);
                console.log(res);
                setName("");
                setDescription("");
                setImage("");
                setReload(oldValue => oldValue+1);
            }
        
    } catch (error) {
        console.log(error);
    }
  }

  return (
    <div className='w-full flex flex-col px-16'>
    
<form onSubmit={handleSubmit} className="max-w-md mx-auto">
  <div className="relative z-0 w-full mb-5 group">
      <input value={name} onChange={e=>setName(e.target.value)} type="text" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  />
      <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Category Name</label>
  </div>
  <div className="relative z-0 w-full mb-5 group">
      <input value={description} onChange={e=>setDescription(e.target.value)} type="text" name="floating_password" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  />
      <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Description</label>
  </div>
  <div className="relative z-0 w-full mb-5 group">
      <input onChange={handleImageInput} type="file" name="repeat_password" id="floating_repeat_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  />
      <label htmlFor="floating_repeat_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Image</label>
  </div>
  {error? <p className="text-red-700"> {error} </p> : null}
  <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>

    </div>
  )
}

export default AddCategory
