import * as React from "react";
import { Link } from "gatsby";

const Layout = ({ pageTitle, children }) => {
  return (
    <div className="container mx-auto">
      <title>{pageTitle}</title>
      <nav className="flex justify-center pb-8 space-x-4">
        {[
          ["Home", "/"],
          ["About", "/about"],
        ].map(([title, url]) => (
          <Link
            key={title}
            to={url}
            className="font-medium px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100 hover:text-gray-900"
          >
            {title}
          </Link>
        ))}
      </nav>
      <main>
        <h1 className="flex justify-center pb-8 text-3xl font-bold underline">
          {pageTitle}
        </h1>
        {children}
      </main>
    </div>
  );
};

export default Layout;
