import axios from "axios";

export default async function FilterByCategory() {
  try {
    const response = await axios.get(process.env.BACKEND_API + "/categories/");
    const data = response.data;

    return (
      <div className="mt-8">
        <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">
          Filter By Category
        </h3>
        <ul className="text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
          {data.map((category) => (
            <li
              key={category.id}
              className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600"
            >
              <div className="flex items-center ps-3">
                <input
                  id={category.id}
                  type="checkbox"
                  value={category.id}
                  className="h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
                <label
                  htmlFor={category.id}
                  className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  {category.category_name}
                </label>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  } catch (error) {
    console.log(error);
  }
}
