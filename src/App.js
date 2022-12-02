import React, { Suspense, lazy, useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CategoryPage from "./Sitepage/CategoryPage";
import SingleProductPage from "./Sitepage/SingleProductPage";
import WhatsappIcon from "./components/whatsAppicon";
import NotFoundPage from "./Sitepage/NotFoundPage";
import ScrollToTop from "./helpers/ScrollToTop";
import Home from "./Home/HomePage";
import Footer from "./Pagelayout/Footer";
import Header from "./Pagelayout/Header";
import MobileNav from "./Pagelayout/MobileNav";
import { PRODUCTS } from "./SiteData/data";
function App() {
  const AboutPage = lazy(() => import("./Sitepage/Aboutpage"));
  const Contactpage = lazy(() => import("./Sitepage/ContactPage"));
  const [isDesktop, setDesktop] = useState(
    window.matchMedia("(min-width: 790px)").matches
  );
  const updateMedia = () => {
    setDesktop(window.matchMedia("(min-width: 790px)").matches);
  };
  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });
  return (
    <React.Fragment>
      <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
          <ScrollToTop />
          {isDesktop ? <Header /> : <MobileNav />}
          <Routes>
            <Route path="/contact" element={<Contactpage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/" element={<Home />} />
            {Object.keys(PRODUCTS).map((catKey, _i) => (
              <React.Fragment key={catKey}>
                <Route
                  path={catKey}
                  element={
                    <CategoryPage category={PRODUCTS[catKey]} catKey={catKey} />
                  }
                />
                <Route
                  path={`${catKey}/:prodId`}
                  element={
                    <SingleProductPage
                      category={PRODUCTS[catKey]}
                      catKey={catKey}
                    />
                  }
                />
              </React.Fragment>
            ))}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          <WhatsappIcon />
          <Footer />
        </BrowserRouter>
      </Suspense>
    </React.Fragment>
  );
}
export default App;
