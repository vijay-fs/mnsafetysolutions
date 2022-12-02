import React from "react";
import ProductCard from "./ProductsCard";

const RelatedProducts = ({ category, prodId, catKey }) => {
  return (
    <div className="flex justify-center flex-wrap">
      {category
        .filter((d) => d.prod_id !== prodId)
        .map((prod, i) => (
          <React.Fragment key={prod.prod_id}>
            {i < 4 && (
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
    </div>
  );
};
export default RelatedProducts;
