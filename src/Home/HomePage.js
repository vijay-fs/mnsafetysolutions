import React from "react";
import HomeBanner from "./HomeBanner";
import HomeCertificate from "./HomeCertificate";
import HomeCustomers from "./HomeCustomers";
import HomeServices from "./HomeServices";
import TopProducts from "./TopProducts";
export default function Home() {
  return (
    <>
      <div className="w-screen">
        {/* banner */}
        <HomeBanner />
        {/* pdf file showcase */}
        <HomeCertificate />
        {/* products cards */}
        <TopProducts />
        {/* our services */}
        <HomeServices />
        {/* our cusomeres  */}
        <HomeCustomers />
      </div>
    </>
  );
}
