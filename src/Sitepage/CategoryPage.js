import React from "react";
import ProductCard from "../components/ProductsCard";
const CategoryPage = ({ category, catKey }) => {
  return (
    <>
      <div className="text-center">
        <h2 className="m-8 text-2xl text-bold">
          {catKey.replace(/_/g, " ").toUpperCase()}
        </h2>
        <div className="flex justify-center flex-wrap mx-10 my-10">
          {category.map((prod) => (
            <React.Fragment key={prod.prod_id}>
              <ProductCard
                img={prod.prod_img}
                id={prod.prod_id}
                title={prod.prod_title}
                description={prod.prod_desc}
                catKey={catKey}
              />
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
};
export default CategoryPage;
