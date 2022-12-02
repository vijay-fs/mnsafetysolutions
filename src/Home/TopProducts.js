import { PRODUCTS } from "../SiteData/data";
import React from "react";
import ProductCard from "../components/ProductsCard";

export default function TopProducts() {
  return (
    <section className="w-screen md:h-screen py-8 mt-20 md:mt-60 bg-slate-200">
      <div className="h-20 w-full">
        <h2 className="text-3xl md:text-4xl mt-6 md:mt-8 text-center">
          Products
        </h2>
      </div>
      <div className="bg-slate-200 mx-auto md:mx-2 md:my-2">
        <div className="flex flex-wrap justify-center">
          {Object.keys(PRODUCTS).map((catKey, i) => (
            <React.Fragment key={catKey}>
              {i < 4 &&
                PRODUCTS[catKey].map((prod, j) => (
                  <React.Fragment key={prod.prod_id}>
                    {j < 1 && (
                      <ProductCard
                        img={prod.prod_img}
                        id={prod.prod_id}
                        title={prod.prod_title}
                        description={prod.prod_desc}
                        catKey={catKey}
                      />
                    )}
                  </React.Fragment>
                ))}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
