import React from "react";
import { Link } from "react-router-dom";

function ErrorBoundary() {
  return (
    <div className="absolute inset-0  flex items-center justify-center">
      <div className="min-w-[480px] flex flex-col gap-2 items-center justify-center rounded-md shadow-md drop-shadow-lg h-96 bg-gradient-to-br from-cyan-50 via-purple-100 to-yellow-200">
        <span className="text-9xl">🥹</span>
        <h2 className="grid justify-items-center gap-5 my-3 text-2xl uppercase max-w-xs text-center font-bold">
          <span>Oops! something went wrong!</span>
          <span className="h-1 w-24 bg-black inline-flex rounded-lg" />
        </h2>
        <p className="text-sm max-w-xs text-center">
          It looks like the page you're looking doesn't exit or has been
          modified.
        </p>
        <Link
          to={"/"}
          className="px-5 py-2 border border-black rounded-lg hover:bg-green-600 hover:text-white font-semibold duration-200 ease-out"
        >
          Go back home
        </Link>
      </div>
    </div>
  );
}

export default ErrorBoundary;
