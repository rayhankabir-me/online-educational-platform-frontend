import axios from "axios";
import Link from "next/link";
//import CategoryImage from "../../../public/category_image.webp";

export default function CategoryItem({ category, setEditCategory, setReload }) {
  const { id, category_name, description, created_by } = category;
  const isAdmin = true;

  const handleDelete = async () => {
    const url = "http://localhost:3000/categories/" + category.id;
    const config = {
      headers: {
        //nije likh token from postman after logging in
        Authorization:
          "Bearer " + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im1yaXR0aWthIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNzE1NzE1NTg4LCJleHAiOjE3MTU3MTkxODh9.jH4RmgWjedN-b_JNdUJTtD9fyyB5IFvEM0nIDtPt8DQ",
      },
    };
    try {
      const res = await axios.delete(url, config);
      console.log(res);
      setReload((oldValue) => oldValue + 1);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-w-sm w-full sm:w-1/2 lg:w-1/3 px-4 pb-8">
      <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        {/* <a href="#">
          <Image
            width={800}
            height={500}
            className="rounded-t-lg"
            src={CategoryImage}
            alt="Category Image"
          />
        </a> */}
        <div className="p-5">
          <a href="#">
            <h5 className="mb-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {description}
            </h5>
          </a>
          <div className="text-sm mb-4 flex items-center justify-between">
            <p className="text-gray-700 dark:text-gray-400">
              Category:{" "}
              <span className="font-semibold text-gray-900 dark:text-white">
                {category_name}
              </span>
            </p>

            <p className="text-gray-700 dark:text-gray-400">
              Created by:{" "}
              <span className="font-semibold text-gray-900 dark:text-white">
                {created_by.username}
              </span>
            </p>
          </div>
          <div className="flex items-center justify-between">
            <Link
              href={`/categories`}
              className="inline-flex items-center font-medium text-blue-600 hover:text-blue-800 dark:text-blue-500 dark:hover:text-blue-700"
            >
              View Courses
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
            </Link>

            {isAdmin ? (
              <button
                onClick={() => setEditCategory(category)}
                className="inline-flex items-center font-medium text-blue-600 hover:text-blue-800 dark:text-blue-500 dark:hover:text-blue-700"
              >
                Edit
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
              </button>
            ) : null}

            {isAdmin ? (
              <button
                onClick={handleDelete}
                className="inline-flex items-center font-medium text-blue-600 hover:text-blue-800 dark:text-blue-500 dark:hover:text-blue-700"
              >
                Delete
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
              </button>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
