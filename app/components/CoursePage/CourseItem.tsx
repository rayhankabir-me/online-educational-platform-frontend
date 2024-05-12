import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
export default function CourseItem() {
  return (
    <div className="max-w-sm w-full sm:w-1/2 lg:w-1/3 px-4 pb-8">
      <div className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img
            className="rounded-t-lg"
            src="/docs/images/blog/image-1.jpg"
            alt=""
          />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
          </a>
          <div className="text-sm mb-4 flex items-center justify-between">
            <p className="text-gray-700 dark:text-gray-400">
              By:{" "}
              <span className="font-semibold text-gray-900 dark:text-white">
                Bonnie Green
              </span>
            </p>

            <p className="text-gray-700 dark:text-gray-400">
              Category:{" "}
              <span className="font-semibold text-gray-900 dark:text-white">
                Laravel
              </span>
            </p>
          </div>
          <p className="mb-8 font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>

          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">
              $599
            </span>
            <Link
              href="#"
              className="inline-flex items-center font-medium text-blue-600 hover:text-blue-800 dark:text-blue-500 dark:hover:text-blue-700"
            >
              Learn more
              <svg
                className=" w-2.5 h-2.5 ms-2 rtl:rotate-180"
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
          </div>
        </div>
      </div>
    </div>
  );
}
