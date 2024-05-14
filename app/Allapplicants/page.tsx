'use client'
import axios from "axios";
import { useState, useEffect } from "react";

function Allapplicants() {
  const [applicants, setApplicants] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/applyinstructor/Admin/all");
        setApplicants(response.data);
      } catch (error) {
        console.error("Error fetching applicants:", error);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/applyinstructor/${id}`);
      // Update the local state to reflect the deletion
      setApplicants(applicants.filter((applicant) => applicant.id !== id));
    } catch (error) {
      console.error("Error deleting applicant:", error);
    }
  };

  const handleApprove = async (id) => {
    try {
      await axios.patch(`http://localhost:5000/applyinstructor/Admin/applyinstructor/${id}`);
      // Update the local state to reflect the approval
      setApplicants(applicants.map((applicant) =>applicant.id === id ? { ...applicant, approval: true } : applicant ));
      
    } catch (error) {
      console.error("Error approving applicant:", error);
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
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th className="px-8 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider rounded-tr-lg">
                Phone
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
            {applicants.map((applicant, index) => (
              <tr key={index} className="bg-black divide-y divide-gray-200">
                <td className="px-6 py-4 whitespace-nowrap">{applicant.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{applicant.email}</td>
                <td className="px-6 py-4 whitespace-nowrap">{applicant.phone}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {applicant.approval ? "Instructor" : "Student"}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button
                    onClick={() => handleDelete(applicant.id)}
                    className="text-red-500 hover:text-red-700 mr-2"
                  >
                    Delete
                  </button>
                  {!applicant.approval && (
                    <button
                      onClick={() => handleApprove(applicant.id)}
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

export default Allapplicants;
