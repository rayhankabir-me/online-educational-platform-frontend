export default function FilterByCategory() {
  return (
    <div className="mt-8">
      <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">
        Filter By Category
      </h3>
      <ul className="text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
          <div className="flex items-center ps-3">
            <input
              id="vue-checkbox"
              type="checkbox"
              value=""
              className="h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label
              for="vue-checkbox"
              className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Vue JS
            </label>
          </div>
        </li>
        <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
          <div className="flex items-center ps-3">
            <input
              id="react-checkbox"
              type="checkbox"
              value=""
              className="h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label
              for="react-checkbox"
              className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              React
            </label>
          </div>
        </li>
        <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
          <div className="flex items-center ps-3">
            <input
              id="angular-checkbox"
              type="checkbox"
              value=""
              className="h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label
              for="angular-checkbox"
              className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Angular
            </label>
          </div>
        </li>
        <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
          <div className="flex items-center ps-3">
            <input
              id="laravel-checkbox"
              type="checkbox"
              value=""
              className="h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label
              for="laravel-checkbox"
              className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Laravel
            </label>
          </div>
        </li>
      </ul>
    </div>
  );
}
