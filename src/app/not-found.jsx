"use client";

import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="flex-1  bg-gray-50 flex  items-center">
      <div className="flex flex-col items-center justify-center  h-full flex-1 text-center px-6">
        <div className="text-8xl font-bold text-gray-300">404</div>

        <h2 className="text-2xl font-semibold text-gray-800 mt-4">
          Oops! Page not found
        </h2>

        <p className="text-gray-500 mt-2 max-w-md">
          The page you’re looking for might have been removed or is temporarily
          unavailable.
        </p>

        <Link
          href="/"
          className="mt-6 px-6 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
