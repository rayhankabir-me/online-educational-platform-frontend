'use client'
import axios from "axios";
import { useState, useEffect } from "react";

function AllnewCourse() {
  const [newcourse, setNewcourse] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/newcourse/all");
        setNewcourse(response.data);
      } catch (error) {
        console.error("Error fetching newcourse:", error);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/newcourse/Admin/newcourse/${id}`);
      // Update the local state to reflect the deletion
      setNewcourse(newcourse.filter((newcourse) => newcourse.id !== id));
    } catch (error) {
      console.error("Error deleting newcourse:", error);
    }
  };

  const handleApprove = async (id) => {
    try {
      await axios.patch(`http://localhost:5000/newcourse/Admin/${id}`);
      
      setNewcourse(newcourse.map((newcourse) =>newcourse.id === id ? { ...newcourse, approval: true } : newcourse ));
      
    } catch (error) {
      console.error("Error approving newcourse:", error);
    }
  };

  return (
    <>
      <div>
        <div className="flex justify-center"></div>
        <table className="min-w-full divide-y divide-gray-200 py-3">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider rounded-tl-lg">
                Course Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Course Catagory
              </th>
              <th className="px-8 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider rounded-tr-lg">
                Email
              </th>
              <th className="px-8 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider rounded-tr-lg">
                Desciption
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider rounded-tr-lg">
              Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider rounded-tr-lg">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {newcourse.map((newcourse, index) => (
              <tr key={index} className="bg-black divide-y divide-gray-200">
                <td className="px-6 py-4 whitespace-nowrap">{newcourse.coursename}</td>
                <td className="px-6 py-4 whitespace-nowrap">{newcourse.coursecategory}</td>
                <td className="px-6 py-4 whitespace-nowrap">{newcourse.email}</td>
                <td className="px-6 py-4 whitespace-nowrap">{newcourse.Desciption}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {newcourse.approval ? "Instructor" : "Student"}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button
                    onClick={() => handleDelete(newcourse.id)}
                    className="text-red-500 hover:text-red-700 mr-2"
                  >
                    Delete
                  </button>
                  {!newcourse.approval && (
                    <button
                      onClick={() => handleApprove(newcourse.id)}
                      className="text-green-500 hover:text-green-700"
                    >
                      Approve
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default AllnewCourse;
