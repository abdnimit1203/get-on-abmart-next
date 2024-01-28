import Link from "next/link";
import React from "react";
import { GrStatusWarning } from "react-icons/gr";

const ErrorPage = () => {
  return (
    <div className="flex min-h-screen justify-center items-center text-center flex-col gap-6 bg-gradient-to-tr from-red-400 via-yellow-100 to-pink-300">
      <p><GrStatusWarning className="text-5xl text-error" />
</p>
      <h2 className="text-2xl font-bold text-red-500">ERROR 404! </h2>
      <h2>Page Not Found </h2>
      <Link href="/" className="btn btn-primary ">
        Go home
      </Link>
    </div>
  );
};

export default ErrorPage;
