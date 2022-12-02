import Helmet from "react-helmet";
import React from "react";
import { Link } from "react-router-dom";
export default function NotFoundPage() {
  return (
    <React.Fragment>
      <Helmet>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <section className="py-32 mx-auto w-3/12">
        <div className="">
          <img src="/icons8-page-not-found.png" alt="M.N.Safety Solution" />
        </div>
        <h3 className="pt-10 pb-5 text-3xl text-gray-600">Uh oh...</h3>
        <p className="text-gray-600 text-2xl pb-10">
          We can't find the page you're looking for.
        </p>
        <Link
          to="/"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4"
        >
          Go to Home
        </Link>
      </section>
    </React.Fragment>
  );
}
