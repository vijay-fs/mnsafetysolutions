import React from "react";
import { Route, Routes } from "react-router";
import { PRODUCTS } from "./SiteData/data";

export default (
  <Routes>
    <Route path="/contact" />
    <Route path="/about" />
    <Route path="/" />
    {Object.keys(PRODUCTS).map((catKey, i) => (
      <React.Fragment key={catKey}>
        <Route path={catKey} />
        {PRODUCTS[catKey].map((prod) => (
          <Route key={prod.prod_id} path={`${catKey}/${prod.prod_id}`} />
        ))}
      </React.Fragment>
    ))}
  </Routes>
);
