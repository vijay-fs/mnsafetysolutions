import React from "react";
import { useParams } from "react-router-dom";
import RelatedProducts from "../components/RelatedProducts";
import SingleProductPageCard from "../components/SingleProductPageCard";
export default function SingleProductPage({ category, catKey }) {
  const { prodId } = useParams();
  const filteredCategory = category.filter((d) => d.prod_id === prodId);
  return (
    <>
      {filteredCategory.map((prod, i) => (
        <React.Fragment key={prod.prod_id + i}>
          <SingleProductPageCard
            img={prod.prod_img}
            id={prod.prod_id}
            title={prod.prod_title}
            description={prod.prod_desc}
          />
        </React.Fragment>
      ))}

      <div className="mt-20 md:mt-40">
        <h2 className="text-center text-3xl md:text-4xl text-slate-700">
          Related Products
        </h2>
        <RelatedProducts prodId={prodId} category={category} catKey={catKey} />
      </div>
    </>
  );
}
